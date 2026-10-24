const SkillCard = ({ nombre, nivel, categoria, descripcion }) => {
  return (
    <article className="card skill-card">
      <span className="badge">{categoria}</span>
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <small>Nivel: {nivel}</small>
    </article>
  );
};

export default SkillCard;
