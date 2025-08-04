import { ButtonSocial } from "./common/buttonSocial";
import { Github, Linkedin, Mail } from "lucide-react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import profile from "../assets/me.jpg";

export const Resume = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#profile",
      {
        y: "-100vh",
        rotation: -360,
      },
      {
        y: 0,
        duration: 1,
        rotation: 0,
        ease: "power1",
      }
    );
  }, []);

  return (
    <section>
      <img
        id="profile"
        src={profile}
        alt="foto de perfil"
        className="w-32 h-32  object-cover mb-4 rounded-full"
      />
      {/* textos */}
      <div className="flex flex-col gap-3 animate-fade animate-ease-in">
        <div className="flex flex-col  items-start md:flex-row md:items-center gap-3">
          <h1 className="text-3xl font-bold">Hola, soy Franco Rinque</h1>
          <span className="px-3 border border-green-200 text-green-100 rounded-full text-sm">
            Disponible para trabajar
          </span>
        </div>
        <p className="text-pretty text-soft-gray text-2xl">
          Actualmente cuento con más de 3 años de experiencia creando interfaces
          modernas y funcionales con React y Tailwind CSS. Me apasiona construir
          productos usables y escalables, priorizando la experiencia del usuario
          y el código limpio. Me destaco por mi iniciativa para desarrollar
          soluciones que optimicen procesos y reduzcan tiempos.
        </p>

        <div className="flex gap-3  items-center">
          <ButtonSocial href="https://github.com/FrancoRinque">
            <Github size={24} />
            Github
          </ButtonSocial>
          <ButtonSocial href="https://www.linkedin.com/in/franco-agustin-rinque/">
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
