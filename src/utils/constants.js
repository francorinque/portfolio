import rmovies from "../assets/projects/rmovies.png";
import rnews from "../assets/projects/rnews.png";
import twitch from "../assets/projects/twitch.png";
import mibutacaVideo from "../assets/projects/mibutaca.mp4";

export const projects = [
  {
    id: 1,
    title: "RMovies",
    description:
      "Una aplicación web para buscar películas y series, integrando la API de TMDB.",
    techs: ["React", "Framer Motion", "Zustand"],
    image: rmovies,
    codeLink: "https://github.com/francorinque/RMovies",
    projectLink: "https://r-movies-two.vercel.app/",
    video: null,
  },
  {
    id: 2,
    title: "RNews",
    description:
      "Una web de noticias en línea, integrando la API de New York Times.",
    techs: ["React", "Framer Motion", "Zustand"],
    image: rnews,
    codeLink: "https://github.com/francorinque/RNews-Times",
    projectLink: "https://r-news-times.vercel.app/",
    video: null,
  },
  {
    id: 3,
    title: "Twitch Subscription",
    description:
      "Prototipo personal que demuestra el concepto de suscripción a múltiples canales de Twitch con un solo clic, diseñado para optimizar la experiencia del usuario.",
    techs: ["HTML", "CSS", "JavaScript"],
    image: twitch,
    codeLink: "https://github.com/francorinque/twitch-subscription",
    projectLink: "https://twitch-subscription.vercel.app/",
    video: null,
  },
  {
    id: 4,
    title: "Mi butaca",
    description:
      "E-commerce desarrollado durante mi pasantía en la Academia Henry. Aunque el deploy ya no está activo debido a la finalización del programa de pasantía y la suspensión del servicio de hosting utilizado, el video muestra las principales funcionalidades.",
    techs: ["React", "Redux Toolkit", "CSS"],
    image: null,
    codeLink: "https://github.com/francorinque/RMovies",
    projectLink: "https://r-movies-two.vercel.app/",
    video: mibutacaVideo,
  },
];
