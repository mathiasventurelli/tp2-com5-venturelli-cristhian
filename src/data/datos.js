import imagenPerfil from "../assets/mathias.JPG";

export const persona = {
  nombre: "Cristhian Venturelli",
  edad: 30,
  imagen: imagenPerfil,
  email: "cmventurelli@gmail.com",
  github: "",   // completar con tu enlace de GitHub
  linkedin: "", // completar con tu enlace de LinkedIn (opcional)
  ciudad: "Tafí Viejo",
  provincia: "Tucumán",
  profesion: "Estudiante de Programación",
  frase: "Salmo 94:17 - Si no me ayudara el Señor, pronto moriría mi alma en el silencio.",
};

export const menu = [
  { ruta: "/", texto: "Inicio" },
  { ruta: "/about", texto: "Sobre mí" },
  { ruta: "/skills", texto: "Habilidades" },
  { ruta: "/projects", texto: "Proyectos" },
  { ruta: "/contact", texto: "Contacto" },
];

export const habilidades = [
  { id: 1, nombre: "C#", nivel: "Intermedio", categoria: "Lenguajes", descripcion: "Desarrollo de aplicaciones y sistemas de gestión." },
  { id: 2, nombre: "JavaScript", nivel: "Intermedio", categoria: "Lenguajes", descripcion: "Base de mis proyectos web: funciones, arrays y eventos." },
  { id: 3, nombre: "React", nivel: "Inicial", categoria: "Frontend", descripcion: "Componentes, props, estado con useState y navegación con React Router." },
  { id: 4, nombre: "HTML", nivel: "Intermedio", categoria: "Frontend", descripcion: "Maquetado de páginas web." },
  { id: 5, nombre: "CSS", nivel: "Intermedio", categoria: "Frontend", descripcion: "Estilos, flexbox y diseño responsive." },
  { id: 6, nombre: "Microsoft", nivel: "Inicial", categoria: "Herramientas", descripcion: "Herramientas y tecnologías del entorno Microsoft." },
];

export const proyectos = [
  {
    id: 1,
    titulo: "Conexión Sur",
    descripcion: "Proyecto de autoayuda para jóvenes mediante la fe cristiana y acompañamiento de profesionales de la salud e interdisciplinario.",
    detalle: "Plataforma pensada para acompañar a jóvenes, con espacios de contención y contacto con profesionales. Se desarrolla como proyecto grupal de la cursada.",
    tecnologias: ["C#", "JavaScript", "CSS", "HTML", "SQL", "React"],
    enlace: "",
  },
  {
    id: 2,
    titulo: "Portafolio Personal",
    descripcion: "Portafolio personal para mostrar mis proyectos y habilidades como programador.",
    detalle: "Evolución del TP1: pasó de una sola página a una aplicación multipágina con menú lateral y React Router DOM.",
    tecnologias: ["React", "React Router", "JavaScript", "CSS"],
    enlace: "",
  },
  {
    id: 3,
    titulo: "Plataforma Hotel",
    descripcion: "Sistema de gestión de reservas de un hotel.",
    detalle: "Aplicación para administrar las reservas de habitaciones de un hotel.",
    tecnologias: ["C#", "CSS", "HTML"],
    enlace: "",
  },
];
