export const roadSafety = {
  products: [
    {
      name: "Sentinel 24",
      type: "Cinemómetro multicarril",
      description: "Mide la velocidad mediante espiras inductivas y fiscaliza hasta dos carriles de forma simultánea. Permite configurar la captura frontal o posterior por carril, validar cada medición y consultar estadísticas e imágenes en alta resolución para respaldar la operación.",
      image: "/assets/sentinel/sentinel-field-view.webp",
      imageAlt: "Render de una instalación vial de Sentinel 24",
      path: "/seguridad-vial/sentinel-24",
      isPlaceholder: false,
    },
    {
      name: "Sentinel Doppler-S",
      type: "Control de cruce con luz roja",
      description: "Detecta el paso de los vehículos, su sentido y velocidad para registrar cruces con luz roja e invasión de la senda peatonal. Relaciona cada evento con el estado del semáforo y genera capturas como evidencia para su revisión.",
      image: "/assets/development/LPRIMG.png",
      imageAlt: "Equipo de control vial instalado junto a una intersección semaforizada",
      path: "/seguridad-vial/sentinel-doppler-s",
      isPlaceholder: false, // TODO: reemplazar por imagen real autorizada de Sentinel Doppler-S.
    },
    {
      name: "LPR",
      type: "Lectura de patentes",
      description: "Software de lectura de patentes desarrollado por IDEA para identificar vehículos y organizar la información detectada. Permite generar reportes y alertas, almacenar imágenes e integrarse con pantallas LED y distintas configuraciones de instalación.",
      image: "/assets/development/dppler.png",
      imageAlt: "Cámara de lectura vehicular instalada sobre una autopista",
      path: "/seguridad-vial/lpr",
      isPlaceholder: false, // TODO: reemplazar por material real autorizado de LPR.
    },
  ],
  services: [
    {
      title: "Instalación",
      text: "Los equipos de fiscalización son instrumentos de medición. Nuestro personal recibe capacitación de quienes los han desarrollado. Todos los procesos de instalación son documentados y generan reportes internos.",
    },
    {
      title: "Mantenimiento",
      text: "Realizamos el servicio de mantenimiento de todas nuestras instalaciones y equipos.",
    },
    {
      title: "Procesamiento y actas",
      text: "Procesamiento de registros y generación de actas de infracción.",
    },
    {
      title: "Cobros",
      text: "Generación de códigos QR para pagos 3.0. Control de pagos, con generación de informes en tiempo real.",
    },
  ],
  afterSales: [
    "Garantía de 1 año por fallas o defectos de fabricación en todos nuestros equipos.",
    "Actualización constante de los equipos.",
    "20 años de permanencia en el mercado confirman nuestra seriedad.",
    "Capacidad de adaptación a sistemas preexistentes de los clientes.",
  ],
  sentinelDetails: [
    {
      title: "Medición y captura",
      items: [
        "Fiscalización simultánea de hasta dos carriles.",
        "Capturas frontales o posteriores configurables por carril.",
        "Velocidad máxima permitida y velocidad de captura configurables por carril.",
        "Estadísticas de todos los vehículos medidos.",
        "Imágenes en alta resolución.",
      ],
    },
    {
      title: "Validación y operación",
      items: [
        "Más de 11 pruebas por medición validan que la velocidad corresponda al vehículo detectado.",
        "Capacidad de trabajo en tiempo real para detención de vehículos.",
        "Transmisión de archivos a servidores remotos mediante SSH, con cifrado de extremo a extremo.",
        "Encriptación de los archivos generados.",
      ],
    },
  ],
  doppler: {
    name: "Sentinel Doppler-S",
    image: "/assets/development/LPRIMG.png",
    imageAlt: "Equipo de control vial instalado junto a una intersección semaforizada",
    isPlaceholder: false,
    intro: "Sentinel Doppler-S está diseñado para registrar cruces con luz roja e invasiones de la senda peatonal. Su sensor Doppler detecta el paso de los vehículos y permite identificar su sentido y velocidad; el sistema relaciona el evento con el estado del semáforo y reúne capturas para facilitar su revisión.",
    features: [
      "Permite registrar cruces en rojo e invasión de la senda peatonal.",
      "Relacionando el estado del semáforo con la detección del paso de un vehículo, genera tres capturas como evidencia.",
      "Posee detección inalámbrica de luces, reduciendo el tendido de cables en la intersección.",
      "Integra cámara y sensor en un mismo gabinete para disminuir el impacto visual.",
      "Posee capacidad de envío de infracciones detectadas al centro de monitoreo en tiempo real.",
      "Diseñado para distintos niveles de flujo vehicular."
    ],
  },
  lpr: {
    name: "LPR",
    image: "/assets/development/dppler.png",
    imageAlt: "Cámara de lectura vehicular instalada sobre una autopista",
    isPlaceholder: false,
    intro: "LPR combina cámaras de lectura vehicular con software desarrollado por ingenieros de IDEA para reconocer patentes y organizar los registros detectados. Puede adaptarse a centros de monitoreo, generar reportes y alertas, conservar imágenes y conectarse con pantallas LED según las necesidades de cada instalación.",
    features: [
      "Generación de reportes y alertas.",
      "Almacenamiento de imágenes de las patentes detectadas.",
      "Conexión a pantallas LED para brindar información al conductor.",
      "Adaptación a tótems, columnas y pórticos.",
    ],
  },
};
