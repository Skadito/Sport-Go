import React from "react";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/reservas">Reservas</a></li>
        <li><a href="/login">Iniciar sesión</a></li>
        <li><a href="/registro">Registrarse</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
