import { useState } from "react";

const ProjectCard = ({ titulo, descripcion, detalle, tecnologias, enlace }) => {
  // Estado local: controla si se muestra el detalle del proyecto.
  const [verDetalle, setVerDetalle] = useState(false);

  return (
    <article className="card project-card">
      <h3>{titulo}</h3>
      <p>{descripcion}</p>

      <div className="technologies">
        {tecnologias.map((tec) => (
          <span key={tec} className="technology">{tec}</span>
        ))}
      </div>

      {verDetalle && <p className="detalle">{detalle}</p>}

      <div className="card-acciones">
        <button onClick={() => setVerDetalle(!verDetalle)}>
          {verDetalle ? "Ocultar detalle" : "Ver detalle"}
        </button>
        {enlace && (
          <a className="btn-link" href={enlace} target="_blank" rel="noreferrer">
            Ver repositorio
          </a>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
