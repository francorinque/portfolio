export const ProjectCard = ({
  title,
  subtitle,
  description,
  techs,
  image,
  codeLink,
  projectLink,
}) => {
  return (
    <div className="bg-black rounded-xl p-4 text-white space-y-4 shadow-lg border border-white/10">
      {/* Título y subtítulo */}
      <div>
        <h2 className="text-xl font-bold">{title}</h2>
        {subtitle && <h3 className="text-base text-gray-400">{subtitle}</h3>}
        <p className="mt-2 text-sm text-gray-300">{description}</p>
      </div>

      {/* Tecnologías */}
      <div className="flex flex-wrap gap-2">
        {techs.map((tech) => (
          <span
            key={tech}
            className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-xs text-soft-blue"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Imagen del proyecto */}
      <div className="overflow-hidden rounded-lg border border-white/10">
        <img src={image} alt={`Captura de ${title}`} className="w-full" />
      </div>

      {/* Botones de acción */}
      <div className="flex gap-4 justify-center mt-2">
        <a
          href={codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/10 text-white hover:bg-white/10 transition"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.9.1-.7.3-1.1.6-1.4-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.4 1.2a11.7 11.7 0 0 1 6.1 0C17.6 5.3 18.6 5.6 18.6 5.6c.6 1.7.2 3 .1 3.3.7.9 1.2 2 1.2 3.3 0 4.4-2.7 5.4-5.3 5.7.4.3.7.9.7 1.9v2.8c0 .3.2.7.8.6a11.5 11.5 0 0 0 7.9-10.9C23.5 5.6 18.35.5 12 .5z" />
          </svg>
          Ver Código
        </a>

        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/10 text-white hover:bg-white/10 transition"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm3 11H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2z" />
          </svg>
          Ver Proyecto
        </a>
      </div>
    </div>
  );
};
