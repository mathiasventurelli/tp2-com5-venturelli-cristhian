import { Link } from "react-router-dom";
import Header from "../components/Header";
import { persona } from "../data/datos";

const Home = () => {
  return (
    <section>
      <Header titulo={`Hola, soy ${persona.nombre}`} subtitulo={persona.profesion} />
      <div className="card">
        <p>
          Soy estudiante de Programación en la UTN FRT. Me interesa aprender
          nuevas tecnologías y construir aplicaciones web útiles.
        </p>
        <blockquote>{persona.frase}</blockquote>
      </div>
      <h2>¿Qué vas a encontrar acá?</h2>
      <ul className="intro-lista">
        <li><Link to="/about">Sobre mí</Link>: quién soy, mi formación y mis objetivos.</li>
        <li><Link to="/skills">Habilidades</Link>: las tecnologías que estoy aprendiendo.</li>
        <li><Link to="/projects">Proyectos</Link>: trabajos que realicé durante la cursada.</li>
        <li><Link to="/contact">Contacto</Link>: cómo comunicarte conmigo.</li>
      </ul>
    </section>
  );
};

export default Home;
