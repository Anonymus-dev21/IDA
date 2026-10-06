export const roadSafety = {
  products: [
    {
      name: "Sentinel 24",
      type: "Cinemómetro multicarril",
      description: "Medición de velocidad mediante espiras inductivas, con capacidad de fiscalizar dos carriles simultáneamente.",
      image: "/assets/sentinel/sentinel-field-view.webp",
      imageAlt: "Render de una instalación vial de Sentinel 24",
      path: "/seguridad-vial/sentinel-24",
      isPlaceholder: false,
    },
    {
      name: "Sentinel Doppler-S",
      type: "Control de cruce con luz roja",
      description: "Detección de paso, sentido y velocidad para registrar cruces en rojo e invasión de la senda peatonal.",
      image: "/assets/development/dppler.png",
      imageAlt: "Ilustración genérica de una intersección con semáforos",
      path: "/seguridad-vial/sentinel-doppler-s",
      isPlaceholder: false, // TODO: reemplazar por imagen real autorizada de Sentinel Doppler-S.
    },
    {
      name: "LPR",
      type: "Lectura de patentes",
      description: "Software desarrollado por IDEA para lectura de patentes, reportes, alertas y almacenamiento de imágenes.",
      image: "/assets/development/LPRIMG.png",
      imageAlt: "Ilustración genérica de lectura de patentes",
      path: "/seguridad-vial/lpr",
      isPlaceholder: false, // TODO: reemplazar por material real autorizado de LPR.
    },
  ],
  services: [
    {
      title: "Instalación",
      text: "Los equipos de fiscalización son instrumentos de medición. Nuestro personal recibe capacitación de quienes los desarrollan; los procesos de instalación se documentan y generan reportes internos.",
    },
    {
      title: "Mantenimiento",
      text: "Servicio de mantenimiento para los equipos de seguridad vial.",
    },
    {
      title: "Procesamiento y actas",
      text: "Procesamiento de registros y generación de actas de infracción.",
    },
    {
      title: "Pagos",
      text: "Manejo y control de pagos, con generación de pagos 3.0 mediante QR.",
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
    image: "/assets/development/dppler.png",
    isPlaceholder: false,
    intro: "Diseñado para registrar cruces con luz roja. Su sensor Doppler detecta el paso de los vehículos e identifica el sentido y la velocidad.",
    features: [
      "Relaciona el estado del semáforo con el paso del vehículo y puede generar tres capturas como evidencia.",
      "Permite registrar cruces en rojo e invasión de la senda peatonal.",
      "La detección inalámbrica de luces reduce el tendido de cables en la intersección.",
      "Integra cámara y sensor en un mismo gabinete para disminuir el impacto visual.",
      "Si cuenta con conexión a Internet, puede enviar las infracciones detectadas al centro de monitoreo.",
      "Está previsto para distintos niveles de flujo vehicular.",
    ],
  },
  lpr: {
    name: "LPR",
    image: "/assets/development/LPRIMG.png",
    isPlaceholder: false,
    intro: "La solución de lectura de patentes incorpora software desarrollado por ingenieros de IDEA y puede adaptarse a centros de monitoreo.",
    features: [
      "Generación de reportes y alertas.",
      "Almacenamiento de imágenes de las patentes detectadas.",
      "Conexión a pantallas LED para brindar información al conductor.",
      "Adaptación a tótems, columnas y pórticos.",
    ],
  },
};
