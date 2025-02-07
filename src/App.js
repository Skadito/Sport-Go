import React from "react";
import Navbar from "./components/Navbar";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";

const App = () => {
  return (
    <div>
      <Navbar />
      <h1>Bienvenido a la app de reservas deportivas</h1>
      <RegisterForm />  {/* O mostrar LoginForm según la ruta */}
    </div>
  );
};

export default App;
