import { User } from "lucide-react";

export const Aboutme = () => {
  return (
    <section className="py-20" id="about">
      <div className="flex items-center gap-2 mb-4">
        <User />
        <h2 className="text-3xl font-bold">Sobre mi</h2>
      </div>

      <div className="flex flex-col gap-4 *:text-pretty *:text-xl *:text-soft-gray">
        <p>
          Entusiasta del diseño web y las nuevas tecnologías. Busco
          constantemente mejorar mis habilidades y destaco por mi flexibilidad
          ante los cambios.
        </p>
        <p>
          Disfruto colaborando en equipo, donde creo que florece la creatividad.
          Agrego un valor significativo a cada proyecto. ¡Construyamos algo
          grandioso juntos!
        </p>
      </div>
    </section>
  );
};
