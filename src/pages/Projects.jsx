import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";
import { proyectos } from "../data/datos";

const Projects = () => {
  return (
    <section>
      <Header titulo="Proyectos" subtitulo="Trabajos realizados durante la cursada" />
      <div className="grid">
        {proyectos.map((p) => (
          <ProjectCard
            key={p.id}
            titulo={p.titulo}
            descripcion={p.descripcion}
            detalle={p.detalle}
            tecnologias={p.tecnologias}
            enlace={p.enlace}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
