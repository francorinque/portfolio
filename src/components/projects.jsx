import { CodeXml } from "lucide-react";
import { ProjectCard } from "./common/projectCard";
import { projects } from "../utils/constants";

export const Projects = () => {
  return (
    <section id="projects" className="py-10 animate-fade animate-ease-in">
      <div className="flex items-center gap-2">
        <CodeXml />
        <h2 className="text-3xl font-bold">Proyectos</h2>
      </div>

      <section className="mt-10 space-y-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </section>
    </section>
  );
};
