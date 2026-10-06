# IDEA Ingeniería

Sitio institucional de IDEA Ingeniería S.R.L. desarrollado con React, Vite, Tailwind CSS, React Router y Motion.

## Desarrollo

```bash
npm install
npm run dev
npm run lint
npm run build
```

Para publicar el sitio, el servidor debe devolver `index.html` en las rutas internas (SPA fallback).

La prueba de navegación `node scripts/smoke-routes.mjs` requiere el sitio levantado y Chrome con depuración remota. Por defecto usa `http://localhost:5173` y `http://127.0.0.1:9225/json/list`; ambas direcciones pueden cambiarse con `IDEA_TEST_BASE_URL` e `IDEA_CDP_LIST_URL`.

## Secciones y rutas

- `/`: presentación de IDEA y sus dos áreas.
- `/seguridad-vial`: productos, servicios y postventa.
- `/seguridad-vial/sentinel-24`: detalle de Sentinel 24.
- `/seguridad-vial/sentinel-doppler-s`: detalle de Sentinel Doppler-S.
- `/seguridad-vial/lpr`: lectura de patentes.
- `/desarrollo-y-fabricacion`: capacidades, proceso y proyectos.
- `/nosotros`: empresa, métricas y equipo.
- `/contacto`: medios de contacto.

Las rutas anteriores `/productos`, `/productos/sentinel-24` y `/productsDetail/:id` redirigen a las nuevas.

## Contenido y material pendiente

Los datos corporativos, el equipo, las métricas y Sentinel 24 están en `src/content/siteContent.js`. Las soluciones viales están en `src/content/roadSafety.js`; los proyectos Yaccuzzi e Hydrofloat, en `src/content/development.js`.

Los siguientes gráficos son ilustraciones genéricas. Reemplazar sus rutas en los módulos de contenido cuando IDEA entregue imágenes autorizadas:

- Sentinel Doppler-S: `public/assets/placeholders/generic-intersection-placeholder.svg`
- LPR: `public/assets/placeholders/generic-lpr-placeholder.svg`
- Fotografías de Sergio y Alejandro: `public/assets/placeholders/team-photo-placeholder.svg`

El detalle de PCB usado como fondo es material ilustrativo, no una fotografía de un desarrollo específico de IDEA.
