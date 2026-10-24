import { NavLink } from "react-router-dom";
import { menu } from "../data/datos";

// NavLink agrega la clase "active" al enlace de la ruta actual.
// "end" en "/" evita que Inicio quede activo en todas las rutas.
const Sidebar = ({ nombre, profesion, imagen }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-perfil">
        <img src={imagen} alt={`Foto de ${nombre}`} />
        <strong>{nombre}</strong>
        <span>{profesion}</span>
      </div>
      <nav className="sidebar-nav">
        {menu.map((item) => (
          <NavLink key={item.ruta} to={item.ruta} end={item.ruta === "/"}>
            {item.texto}
          </NavLink>
        ))}
      </nav>
      <p className="sidebar-pie">© {new Date().getFullYear()} {nombre}</p>
    </aside>
  );
};

export default Sidebar;
