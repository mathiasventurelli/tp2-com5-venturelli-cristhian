import { useState } from "react";
import Header from "../components/Header";
import { persona } from "../data/datos";

const About = () => {
  const [mostrarMas, setMostrarMas] = useState(false);

  return (
    <section>
      <Header titulo="Sobre mí" subtitulo="Presentación, formación y objetivos" />
      <div className="card about-card">
        <img src={persona.imagen} alt="Foto de perfil" />
        <div>
          <p>Tengo {persona.edad} años y vivo en {persona.ciudad}, {persona.provincia}.</p>
          <p>
            Estudio la carrera de Programación en la Universidad Tecnológica Nacional
            (Facultad Regional Tucumán).
          </p>

          {mostrarMas && (
            <div className="extra">
              <p><strong>Intereses:</strong> la tecnología, el aprendizaje continuo y el trabajo en equipo.</p>
              <p><strong>Formación:</strong> estudiante de la Tecnicatura en Programación (UTN FRT).</p>
              <p><strong>Objetivos:</strong> desarrollarme como programadora web full stack y seguir aprendiendo nuevas tecnologías.</p>
            </div>
          )}

          <button onClick={() => setMostrarMas(!mostrarMas)}>
            {mostrarMas ? "Mostrar menos" : "Mostrar más"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
