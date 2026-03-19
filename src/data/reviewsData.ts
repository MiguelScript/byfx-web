export type GoogleReview = {
  id: number;
  name: string;
  avatar: string;
  timeAgo: string;
  rating: number;
  text: string;
};

export const reviewsData: GoogleReview[] = [
  {
    id: 1,
    name: "Abiezer Suniaga",
    avatar: "AS",
    timeAgo: "Hace 24 semanas",
    rating: 5,
    text: "Alquiler de equipos; excelente servicio. Cámara, Luces, Operador...",
  },
  {
    id: 2,
    name: "Elias Daniel Martinez Pavone",
    avatar: "EP",
    timeAgo: "Hace 10 semanas",
    rating: 5,
    text: "La verdad el profesionalismo y la dedicación que tienen con cada cliente es algo que solo ellos ofrecen.",
  },
  {
    id: 3,
    name: "Marian Rojas",
    avatar: "MR",
    timeAgo: "Hace 24 semanas",
    rating: 5,
    text: "Tuve la oportunidad de participar en el curso de Adobe Premiere Pro y fue una experiencia excelente. Aprendí a editar videos...",
  },
  {
    id: 4,
    name: "Carlos Méndez",
    avatar: "CM",
    timeAgo: "Hace 6 semanas",
    rating: 5,
    text: "Excelente atención y calidad de trabajo. Muy recomendados para cualquier proyecto audiovisual.",
  },
  {
    id: 5,
    name: "Laura Fernández",
    avatar: "LF",
    timeAgo: "Hace 3 meses",
    rating: 5,
    text: "El equipo es muy profesional y entregaron el proyecto antes de lo esperado. Definitivamente volvería a trabajar con ellos.",
  },
];
