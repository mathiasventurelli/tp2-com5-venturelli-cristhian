import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { persona } from "./data/datos";

// El Sidebar queda fuera de <Routes>, por eso siempre está visible.
// Solo el contenido de <main> cambia según la URL.
const App = () => {
  return (
    <div className="layout">
      <Sidebar nombre={persona.nombre} profesion={persona.profesion} imagen={persona.imagen} />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
