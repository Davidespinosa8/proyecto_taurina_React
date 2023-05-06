import React from "react";
import Navbar from "./components/Navbar";
import Inicio from "./pages/Inicio";
import Cursos from "./pages/Cursos";
import Galeria from "./pages/Galeria";
import Agenda from "./pages/Agenda";
import Contacto from "./pages/Contacto";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Inicio />
      <Cursos />
      <Galeria />
      <Agenda />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
