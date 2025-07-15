import rmovies from "../assets/projects/rmovies.png";
import rnews from "../assets/projects/rnews.png";
import twitch from "../assets/projects/twitch.png";
import mibutacaVideo from "../assets/projects/mibutaca.mp4";

export const projects = [
  {
    id: 1,
    title: "Mi butaca",
    description:
      "Desarrollo de una aplicación web para la venta de boletos de eventos, como parte de una pasantía coordinada por Academia Henry.",
    techs: ["React", "Redux Toolkit", "CSS"],
    image: null,
    codeLink: "https://github.com/francorinque/RMovies",
    projectLink: "https://r-movies-two.vercel.app/",
    video: mibutacaVideo,
  },
  {
    id: 2,
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
    id: 3,
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
    id: 4,
    title: "Twitch Subscription",
    description:
      "Una demo, que permite la subscripción de Twitch en varios canales con un solo click.",
    techs: ["HTML", "CSS", "JavaScript"],
    image: twitch,
    codeLink: "https://github.com/francorinque/twitch-subscription",
    projectLink: "https://twitch-subscription.vercel.app/",
    video: null,
  },
];
