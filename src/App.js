import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Cursos from './pages/Cursos';
import Galeria from './pages/Galeria';
import Agenda from './pages/Agenda';
import Contacto from './pages/Contacto';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
          <Routes>
              <Route exact path="/" element={<Inicio />} />
              <Route exact path="/cursos" element={<Cursos />} />
              <Route exact path="/galeria" element={<Galeria />} />
              <Route exact path="/agenda" element={<Agenda />} />
              <Route exact path="/contacto" element={<Contacto />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
