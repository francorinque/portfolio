import rmovies from "../assets/projects/rmovies.png";
import rnews from "../assets/projects/rnews.png";
import twitch from "../assets/projects/twitch.png";
import mibutacaVideo from "../assets/projects/mibutaca.mp4";
import iphone from "../assets/projects/iphone.png";

import { v4 as uuid } from "uuid";

export const projects = [
  {
    id: uuid(),
    title: "Iphone Website",
    description:
      "Réplica de la web oficial de Apple, desarrollada con React. Se implementaron animaciones fluidas utilizando GSAP y se integró Sentry para el monitoreo y seguimiento de errores en tiempo real.",
    techs: ["React", "Gsap", "Tailwind CSS", "Sentry"],
    image: iphone,
    codeLink: "https://github.com/francorinque/Iphone-website",
    projectLink: "https://iphone-website-chi.vercel.app/",
    video: null,
  },
  {
    id: uuid(),
    title: "RMovies",
    description:
      "Aplicación web para explorar películas y series utilizando la API de TMDB, con animaciones creadas con Framer Motion y estilos implementados mediante Styled Components. Incluye la posibilidad de ver trailers integrando la API de YouTube.",
    techs: ["React", "Framer Motion", "Zustand"],
    image: rmovies,
    codeLink: "https://github.com/francorinque/RMovies",
    projectLink: "https://r-movies-two.vercel.app/",
    video: null,
  },
  {
    id: uuid(),
    title: "RNews",
    description:
      "Aplicación web de noticias en línea que integra la API del New York Times. Permite búsqueda, filtrado por etiquetas y paginación infinita mediante scroll, ofreciendo una experiencia de usuario fluida e interactiva.",
    techs: ["React", "Framer Motion", "Zustand"],
    image: rnews,
    codeLink: "https://github.com/francorinque/RNews-Times",
    projectLink: "https://r-news-times.vercel.app/",
    video: null,
  },
  {
    id: uuid(),
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
    id: uuid(),
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
