import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Inicio from "./pages/Inicio";
import Cursos from "./pages/Cursos";
import Galeria from "./pages/Galeria";
import Contacto from "./pages/Contacto";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Inicio />
      <Cursos />
      <Galeria />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
