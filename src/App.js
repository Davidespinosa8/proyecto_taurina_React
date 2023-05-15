import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Inicio from "./pages/Inicio";
import Cursos from "./pages/Cursos";
import Galeria from "./pages/Galeria";
import Agenda from "./pages/Agenda";
import Contacto from "./pages/Contacto";
import Footer from "./components/Footer";
import SeleccionCursos from "./pages/SeleccionCursos";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleInscribirseClick = (curso) => {
    setSelectedCourse(curso);
    setIsModalOpen(true);
  };

  return (
    <div className="App">
      <Navbar />
      <Inicio />
      <Cursos onInscribirseClick={handleInscribirseClick} />
      <Galeria />
      <Agenda />
      <Contacto />
      <Footer />
      <SeleccionCursos
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        selectedCourse={selectedCourse}
      />
    </div>
  );
}

export default App;;
