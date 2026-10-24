import Header from "../components/Header";
import { persona } from "../data/datos";

const Contact = () => {
  return (
    <section>
      <Header titulo="Contacto" subtitulo="Escribime o seguime en mis redes" />
      <div className="card">
        <ul className="contact-lista">
          <li>Correo: <a href={`mailto:${persona.email}`}>{persona.email}</a></li>
          {persona.github && (
            <li>GitHub: <a href={persona.github} target="_blank" rel="noreferrer">{persona.github}</a></li>
          )}
          {persona.linkedin && (
            <li>LinkedIn: <a href={persona.linkedin} target="_blank" rel="noreferrer">{persona.linkedin}</a></li>
          )}
          <li>Ubicación: {persona.ciudad}, {persona.provincia}</li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
