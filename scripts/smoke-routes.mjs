import { writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

const base = process.env.IDEA_TEST_BASE_URL || "http://localhost:5173";
const paths = [
  "/",
  "/seguridad-vial",
  "/seguridad-vial/sentinel-24",
  "/seguridad-vial/sentinel-doppler-s",
  "/seguridad-vial/lpr",
  "/desarrollo-y-fabricacion",
  "/nosotros",
  "/contacto",
];
const failures = [];
const browserEvents = [];
const pages = await (await fetch(process.env.IDEA_CDP_LIST_URL || "http://127.0.0.1:9225/json/list")).json();
const page = pages.find((entry) => entry.type === "page");
if (!page) throw new Error("No hay una pestaña de Chrome disponible");

const socket = new WebSocket(page.webSocketDebuggerUrl);
await new Promise((resolve, reject) => {
  socket.addEventListener("open", resolve, { once: true });
  socket.addEventListener("error", reject, { once: true });
});

let commandId = 0;
const pending = new Map();
socket.addEventListener("message", ({ data }) => {
  const message = JSON.parse(data);
  if (message.id) {
    const request = pending.get(message.id);
    pending.delete(message.id);
    if (message.error) request.reject(new Error(message.error.message));
    else request.resolve(message.result);
  } else if (message.method === "Runtime.exceptionThrown") {
    browserEvents.push(`JS: ${message.params.exceptionDetails.text}`);
  } else if (message.method === "Log.entryAdded" && message.params.entry.level === "error") {
    browserEvents.push(`Log: ${message.params.entry.text}`);
  } else if (message.method === "Runtime.consoleAPICalled" && ["error", "warning", "warn"].includes(message.params.type)) {
    browserEvents.push(`Console ${message.params.type}: ${message.params.args.map((arg) => arg.value || arg.description || "").join(" ")}`);
  } else if (message.method === "Network.responseReceived" && message.params.response.status >= 400) {
    browserEvents.push(`HTTP ${message.params.response.status}: ${message.params.response.url}`);
  }
});

function send(method, params = {}) {
  return new Promise((resolve, reject) => {
    const id = ++commandId;
    pending.set(id, { resolve, reject });
    socket.send(JSON.stringify({ id, method, params }));
  });
}

async function evaluate(expression) {
  const result = await send("Runtime.evaluate", { expression, returnByValue: true, awaitPromise: true });
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.text);
  return result.result.value;
}

async function until(test, timeout = 8000) {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    if (await test()) return;
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  throw new Error("Tiempo de espera agotado");
}

async function route(path) {
  await send("Page.navigate", { url: base + path });
  await until(async () => evaluate(`location.pathname === ${JSON.stringify(path)} && document.readyState === "complete" && !!document.querySelector("main h1")`));
}

async function snapshot(label) {
  try {
    await until(async () => evaluate(`(() => {
      const heading = document.querySelector("main h1");
      if (!heading) return false;
      for (let element = heading; element && element !== document.body; element = element.parentElement) {
        if (Number(getComputedStyle(element).opacity) === 0) return false;
      }
      return true;
    })()`), 3000);
  } catch {
    failures.push(`El encabezado permaneció oculto: ${label}`);
  }
  const result = await evaluate(`(() => {
    const h1 = document.querySelector("main h1");
    const parents = [];
    for (let element = h1; element && element !== document.body; element = element.parentElement) {
      parents.push(getComputedStyle(element).opacity);
    }
    return {
      path: location.pathname,
      title: document.title,
      heading: h1?.textContent,
      scrollY: window.scrollY,
      overflowX: document.documentElement.scrollWidth > window.innerWidth + 1,
      hiddenHeading: parents.some((opacity) => Number(opacity) === 0),
      width: window.innerWidth,
    };
  })()`);
  if (!result.heading || result.hiddenHeading || result.overflowX) failures.push({ label, ...result });
  console.log(label, JSON.stringify(result));
  return result;
}

async function navigateByClick(selector, targetPath) {
  const found = await evaluate(`(() => { const link = document.querySelector(${JSON.stringify(selector)}); link?.click(); return !!link; })()`);
  if (!found) throw new Error(`No existe el enlace ${selector}`);
  await until(async () => evaluate(`location.pathname === ${JSON.stringify(targetPath)} && !!document.querySelector("main h1")`));
  await new Promise((resolve) => setTimeout(resolve, 120));
}

await send("Page.enable");
await send("Runtime.enable");
await send("Network.enable");
await send("Log.enable");
await send("Emulation.setEmulatedMedia", { features: [{ name: "prefers-reduced-motion", value: "no-preference" }] });

for (const width of [375, 430, 768, 1024, 1440]) {
  await send("Emulation.setDeviceMetricsOverride", { width, height: 900, deviceScaleFactor: 1, mobile: width < 768 });
  for (const path of paths) {
    await route(path);
    await snapshot(`direct ${width} ${path}`);
    if (width === 1440) {
      const imageCount = await evaluate("document.images.length");
      for (let index = 0; index < imageCount; index++) {
        await evaluate(`document.images[${index}].scrollIntoView({ behavior: "instant", block: "center" })`);
        try {
          await until(async () => evaluate(`document.images[${index}].complete && document.images[${index}].naturalWidth > 0`), 6000);
        } catch {
          failures.push(`No cargó la imagen ${index} de ${path}`);
        }
      }
    }
  }
}

await send("Emulation.setDeviceMetricsOverride", { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });
await route("/");
await evaluate("window.scrollTo(0, document.body.scrollHeight)");
await navigateByClick('a[href="/seguridad-vial"]', "/seguridad-vial");
const roadFromScrolledHome = await snapshot("home scrolled → seguridad");
if (roadFromScrolledHome.scrollY > 10) failures.push("El scroll no volvió arriba al entrar a Seguridad Vial");
await evaluate("window.scrollTo(0, document.body.scrollHeight)");
await navigateByClick('a[href="/seguridad-vial/sentinel-24"]', "/seguridad-vial/sentinel-24");
const sentinelFromScrolledRoad = await snapshot("seguridad scrolled → sentinel");
if (sentinelFromScrolledRoad.scrollY > 10) failures.push("El scroll no volvió arriba al entrar a Sentinel");
await evaluate("history.back()");
await until(async () => evaluate('location.pathname === "/seguridad-vial"'));
await snapshot("back → seguridad");
await evaluate("history.forward()");
await until(async () => evaluate('location.pathname === "/seguridad-vial/sentinel-24"'));
await snapshot("forward → sentinel");
await route("/");
await evaluate("window.scrollTo(0, document.body.scrollHeight)");
await navigateByClick('a[href="/seguridad-vial/sentinel-24"]', "/seguridad-vial/sentinel-24");
await snapshot("home scrolled → sentinel");
await route("/desarrollo-y-fabricacion");
await navigateByClick('a[href="/"]', "/");
await snapshot("desarrollo → home");

for (const [oldPath, newPath] of [
  ["/productos", "/seguridad-vial"],
  ["/productos/sentinel-24", "/seguridad-vial/sentinel-24"],
  ["/productsDetail/1", "/seguridad-vial/sentinel-24"],
]) {
  await send("Page.navigate", { url: base + oldPath });
  await until(async () => evaluate(`location.pathname === ${JSON.stringify(newPath)}`));
  console.log(`redirect ${oldPath} → ${newPath}`);
}

await send("Emulation.setDeviceMetricsOverride", { width: 375, height: 812, deviceScaleFactor: 1, mobile: true });
await route("/");
await evaluate("document.querySelector('button[aria-controls=mobile-navigation]').click()");
const expanded = await evaluate("document.querySelector('button[aria-controls=mobile-navigation]').getAttribute('aria-expanded')");
if (expanded !== "true") failures.push("El menú móvil no abre");
await evaluate('window.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true }))');
await until(async () => evaluate("document.querySelector('button[aria-controls=mobile-navigation]').getAttribute('aria-expanded') === 'false'"));
console.log("mobile menu abre y cierra con Escape");
await evaluate("document.querySelector('button[aria-controls=mobile-navigation]').click()");
await navigateByClick('a[href="/desarrollo-y-fabricacion"]', "/desarrollo-y-fabricacion");
const closedAfterNavigation = await evaluate("document.querySelector('button[aria-controls=mobile-navigation]').getAttribute('aria-expanded')");
if (closedAfterNavigation !== "false") failures.push("El menú móvil no se cerró al navegar");

await route("/contacto");
const contactLinks = await evaluate(`({
  email: !!document.querySelector('a[href="mailto:info@idea-ingenieria.com.ar"]'),
  phone: !!document.querySelector('a[href="tel:+543426521699"]'),
  mobile: !!document.querySelector('a[href="tel:+543426308541"]'),
})`);
if (Object.values(contactLinks).some((value) => !value)) failures.push({ contactLinks });
await route("/nosotros");
const linkedInLinks = await evaluate(`Array.from(document.querySelectorAll('a[href*="linkedin.com/in/"]')).map((link) => ({
  href: link.href, target: link.target, rel: link.rel
}))`);
if (linkedInLinks.length !== 2 || linkedInLinks.some((link) => link.target !== "_blank" || !link.rel.includes("noopener") || !link.rel.includes("noreferrer"))) failures.push({ linkedInLinks });
console.log("contacto y LinkedIn verificados", JSON.stringify({ contactLinks, linkedInLinks }));

await send("Page.navigate", { url: base + "/#equipo" });
await until(async () => evaluate('location.pathname === "/nosotros" && location.hash === "#equipo"'));
console.log("enlace antiguo /#equipo → /nosotros#equipo");

await send("Emulation.setEmulatedMedia", { features: [{ name: "prefers-reduced-motion", value: "reduce" }] });
await route("/");
const reducedMotion = await evaluate('matchMedia("(prefers-reduced-motion: reduce)").matches');
if (!reducedMotion) failures.push("No se aplicó prefers-reduced-motion");
await snapshot("reduced motion");

for (const [name, width, path] of [
  ["home-mobile", 375, "/"],
  ["home-desktop", 1440, "/"],
  ["road-mobile", 375, "/seguridad-vial"],
  ["development-desktop", 1440, "/desarrollo-y-fabricacion"],
]) {
  await send("Emulation.setDeviceMetricsOverride", { width, height: 900, deviceScaleFactor: 1, mobile: width < 768 });
  await route(path);
  const { data } = await send("Page.captureScreenshot", { format: "png", captureBeyondViewport: false });
  const destination = join(tmpdir(), `idea-smoke-${name}.png`);
  await writeFile(destination, Buffer.from(data, "base64"));
  console.log(`screenshot ${destination}`);
}

for (const [name, width, path, selector] of [
  ["home-areas-mobile", 375, "/", "#capacidades"],
  ["home-sentinel-mobile", 375, "/", "#sentinel"],
  ["road-postventa-desktop", 1440, "/seguridad-vial", "#postventa"],
  ["development-projects-mobile", 375, "/desarrollo-y-fabricacion", "#proyectos"],
  ["about-team-mobile", 375, "/nosotros", "#equipo"],
  ["contact-mobile", 375, "/contacto", "#contacto"],
]) {
  await send("Emulation.setDeviceMetricsOverride", { width, height: 900, deviceScaleFactor: 1, mobile: width < 768 });
  await route(path);
  await evaluate(`document.querySelector(${JSON.stringify(selector)}).scrollIntoView({ behavior: "instant", block: "start" })`);
  await new Promise((resolve) => setTimeout(resolve, 250));
  const { data } = await send("Page.captureScreenshot", { format: "png", captureBeyondViewport: false });
  const destination = join(tmpdir(), `idea-smoke-${name}.png`);
  await writeFile(destination, Buffer.from(data, "base64"));
  console.log(`screenshot ${destination}`);
}

socket.close();
if (browserEvents.length) console.error("Browser events:", browserEvents);
if (failures.length) {
  console.error("Failures:", failures);
  process.exitCode = 1;
} else if (browserEvents.length) {
  process.exitCode = 1;
} else {
  console.log("Smoke test completo sin errores.");
}
