import { Github, Eye } from "lucide-react";
import { ButtonCustom } from "./buttonCustom";

export const ProjectCard = ({
  title,
  description,
  techs,
  image,
  codeLink,
  projectLink,
  video,
}) => {
  return (
    <div
      className="bg-black rounded-xl p-4 text-white space-y-4 border border-white/10"
      id="card"
    >
      {/* Título y subtítulo */}
      <div>
        <h2 className="text-2xl font-bold text-light-blue">{title}</h2>
        <p className="mt-2 text-xl text-soft-gray">{description}</p>
      </div>

      {/* Tecnologías */}
      <div className="flex flex-wrap gap-2">
        {techs.map((tech) => (
          <span
            key={tech}
            className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-xs text-soft-gray"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Imagen del proyecto */}
      <div className="overflow-hidden rounded-xl aspect-video">
        {video ? (
          <video src={video} controls className="w-full h-full object-cover" />
        ) : (
          <img
            src={image}
            alt={`Captura de ${title}`}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Botones de acción */}
      {!video && (
        <div className="flex gap-4 justify-center mt-2">
          <ButtonCustom href={codeLink}>
            <Github />
            Ver Código
          </ButtonCustom>
          <ButtonCustom href={projectLink}>
            <Eye />
            Ver Proyecto
          </ButtonCustom>
        </div>
      )}
    </div>
  );
};
