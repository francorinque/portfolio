import { ButtonSocial } from "./common/buttonSocial";
import { Github, Linkedin, Mail } from "lucide-react";

import profile from "../assets/me.jpg";

export const Resume = () => {
  return (
    <section>
      <img
        src={profile}
        alt="foto de perfil"
        className="w-32 h-32 rounded-full object-cover mb-4"
      />
      {/* textos */}
      <div className="flex flex-col gap-3">
        <div className="flex flex-col  items-start md:flex-row md:items-center gap-3">
          <h1 className="text-3xl font-bold">Hola, soy Franco Rinque</h1>
          <span className="px-3 border border-green-200 text-green-100 rounded-full text-sm">
            Disponible para trabajar
          </span>
        </div>
        <p className="text-pretty text-soft-gray text-2xl">
          Desarrollador Web Frontend desde Buenos Aires, Argentina, con 1.6 años
          de experiencia en Synergiart (España) y 4 años en proyectos
          independientes. Especializado en crear aplicaciones web dinámicas y
          centradas en el usuario.
        </p>

        <div className="flex gap-3  items-center">
          <ButtonSocial href="https://github.com/FrancoRinque">
            <Github size={24} />
            Github
          </ButtonSocial>
          <ButtonSocial href="https://linkedin.com/in/francorinque">
            <Linkedin size={24} />
            Linkedin
          </ButtonSocial>
          <ButtonSocial href="mailto:francoagustinrinquecorreo@gmail.com">
            <Mail size={24} />
            Correo
          </ButtonSocial>
        </div>
      </div>
    </section>
  );
};
