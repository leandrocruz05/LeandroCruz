const education = [
  {
    degree: "Full Stack Developer",
    institution: "CoderHouse",
    dates:  "2025 - Presente",
    status: "En curso",
    description: "Formación integral en desarrollo Full Stack con especialización en tecnologías modernas.",
    tags: [
      { type: "React" },
      { type: "Node.js" },
      { type: "JavaScript" },
      { type: "Backend" }
    ]
  },
  {
    degree: "Analista de Sistemas",
    institution: "Universidad de Buenos Aires (UBA)",
    dates: "2020 - Presente",
    status: "En curso",
    description: "Carrera universitaria enfocada en análisis, diseño y desarrollo de sistemas informáticos.",
    tags: [
      { type: "Análisis de Sistemas" },
      { type: "Algoritmos" },
      { type:  "Base de Datos" }
    ]
  },
  {
    degree: "Técnico en Informática Profesional",
    institution: "Instituto Técnico Dr. Emilio Lamarca",
    dates: "2013 - 2019",
    status: "Completado",
    description: "Formación técnica secundaria en informática profesional y programación.",
    tags: [
      { type: "Programación" },
      { type: "Redes" },
      { type: "Hardware" }
    ]
  }
];

const certifications = [
  { name: "Backend I", institution: "CoderHouse", year: "2026", status: "En curso" },
  { name: "React Js", institution: "CoderHouse", year: "2025", status: "Completado" },
  { name: "JavaScript", institution: "CoderHouse", year: "2025", status: "Completado" },
  { name: "Desarrollo Web", institution: "CoderHouse", year: "2025", status: "Completado" },
  { name: "Testing de Software", institution: "Sistemas Activos SRL", year: "2019", status: "Completado" }
];

module.exports = { education, certifications };