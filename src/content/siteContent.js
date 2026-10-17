export const siteContent = {
  company: {
    name: "IDEA",
    legalName: "IDEA Ingeniería S.R.L.",
    tagline: "Ingeniería y Desarrollos Electrónicos Argentinos",
    location: "Santa Fe, Argentina",
  },
  navigation: [
    { label: "Inicio", href: "/" },
    { label: "Seguridad Vial", href: "/seguridad-vial" },
    { label: "Desarrollo y Fabricación", href: "/desarrollo-y-fabricacion" },
    { label: "Nosotros", href: "/nosotros" },
    { label: "Contacto", href: "/contacto" },
  ],
  contact: {
    email: "info@idea-ingenieria.com.ar",
    alternateEmail: "idea.contactos@gmail.com",
    phone: "+54 342 4053005",
    mobile: "+54 342 630 8541",
  },
  metrics: [
    { value: 200, prefix: "+", label: "clientes" },
    { value: 4500, prefix: "+", label: "fabricaciones" },
    { value: 25, prefix: "+", label: "productos distintos" },
    { value: 15, prefix: "+", label: "desarrollos con homologación nacional" },
  ],
  capabilities: [
    {
      title: "Desarrollo a medida",
      text: "Diseñamos equipos electrónicos para necesidades que un producto estándar no resuelve.",
      icon: "01",
    },
    {
      title: "Prototipado e ingeniería",
      text: "Construimos prototipos, los probamos y ajustamos el diseño antes de fabricar.",
      icon: "02",
    },
    {
      title: "Fabricación e integración",
      text: "Fabricamos, montamos y testeamos, dando una solución llave en mano a nuestros clientes.",
      icon: "03",
    },
    {
      title: "Sistemas embebidos",
      text: "Si el desarrollo requiere integrar conectividad, integración con servicios Web, software y hardware, nuestro Staff de ingenieros está totalmente capacitado para dar la solución que usted necesita.",
      icon: "04",
    },
    {
      title: "Consultoría técnica",
      text: "Ayudamos a evaluar opciones y a tomar decisiones de ingeniería con base a 20 años de experiencia en el rubro.",
      icon: "05",
    },
  ],
  process: [
    { number: "01", title: "Entender el problema", text: "Conversamos sobre qué hace falta, dónde se va a usar el equipo y qué debe cumplir." },
    { number: "02", title: "Diseñar y prototipar", text: "Preparamos una primera versión para probar cómo funciona la idea." },
    { number: "03", title: "Probar y ajustar", text: "Comprobamos el funcionamiento y realizamos los cambios necesarios." },
    { number: "04", title: "Fabricar e instalar", text: "Fabricamos el equipo y acompañamos su puesta en marcha." },
  ],
  team: [
    {
      initials: "SH",
      name: "Sergio Alejandro Hernán",
      roles: ["Ingeniero en Electrónica", "Profesor Universitario en Educación Superior", "Matrícula Nº 1.1956.3"],
      linkedin: "https://www.linkedin.com/in/sergio-hernan-b9868a198/",
      image: "/assets/placeholders/team-photo-placeholder.svg",
      isPlaceholder: true, // TODO: reemplazar por fotografía real de Sergio.
    },
    {
      initials: "AC",
      name: "Alejandro Ariel Cabral",
      roles: ["Ingeniero en Electrónica", "Especialista en Sistemas Embebidos", "Matrícula Nº 1.1938.5"],
      linkedin: "https://www.linkedin.com/in/alejandro-ariel-cabral-2a191654/",
      image: "/assets/placeholders/team-photo-placeholder.svg",
      isPlaceholder: true, // TODO: reemplazar por fotografía real de Alejandro.
    },
  ],
  sentinel: {
    name: "Sentinel 24",
    path: "/seguridad-vial/sentinel-24",
    homeSummary: "Sentinel 24 es un cinemómetro multicarril con detección mediante espiras inductivas. Homologado en cumplimiento con la Resolución 753/98.",
    heroImage: "/assets/sentinel/sentinel-field-view.webp",
    gallery: [
      {
        src: "/assets/sentinel/sentinel24img2.png",
        alt: "Render de Sentinel 24 operando sobre dos carriles",
        caption: "Puede medir dos carriles al mismo tiempo.",
      },
      {
        src: "/assets/sentinel/sentinel24img3.png",
        alt: "Render de Sentinel 24 para circulación en sentidos diferentes",
        caption: "También puede trabajar con carriles en sentidos distintos.",
      },
      {
        src: "/assets/sentinel/sentinel24img1.png",
        alt: "Render de cámara de Sentinel 24 en montaje sobre pescante",
        caption: "Una de las opciones de montaje para la cámara.",
      },
    ],
    highlights: [
      { value: "Hasta 2", label: "carriles simultáneos" },
      { value: "2", label: "espiras por carril" },
      { value: "30–150", label: "km/h de rango declarado" },
      { value: "IP65", label: "gabinete" },
    ],
    specifications: [
      ["Medición declarada", "30 km/h a 150 km/h"],
      ["Carriles", "Hasta 2 carriles simultáneos"],
      ["Sensores", "2 espiras inductivas por carril"],
      ["Cámaras", "1 o 2 cámaras IP"],
      ["Temperatura declarada", "0 °C a 50 °C"],
      ["Alimentación", "220 V CA"],
      ["Gabinete", "IP65"],
      ["Registros", "Almacenamiento local y transferencia hacia servidor"],
    ],
  },
};
