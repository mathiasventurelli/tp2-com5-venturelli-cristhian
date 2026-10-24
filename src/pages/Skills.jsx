import Header from "../components/Header";
import SkillCard from "../components/SkillCard";
import { habilidades } from "../data/datos";

const Skills = () => {
  return (
    <section>
      <Header titulo="Habilidades" subtitulo="Tecnologías y herramientas que conozco" />
      <div className="grid">
        {habilidades.map((h) => (
          <SkillCard
            key={h.id}
            nombre={h.nombre}
            nivel={h.nivel}
            categoria={h.categoria}
            descripcion={h.descripcion}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
