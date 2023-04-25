import React from 'react';
import { NavLink, useMatch } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    const matchInicio = useMatch('/');
    const matchCursos = useMatch('/cursos');
    const matchGaleria = useMatch('/galeria');
    const matchAgenda = useMatch('/agenda');
    const matchContacto = useMatch('/contacto');

    return (
        <nav className="navbar">
            <h1 className="fuente-logo">Taurina</h1>
            <div className="nav-link-container">
                <NavLink to="/" className={`nav-link${matchInicio ? ' active' : ''}`} end replace>Inicio</NavLink>
                <NavLink to="/cursos" className={`nav-link${matchCursos ? ' active' : ''}`} replace>Cursos</NavLink>
                <NavLink to="/galeria" className={`nav-link${matchGaleria ? ' active' : ''}`} replace>Galería</NavLink>
                <NavLink to="/agenda" className={`nav-link${matchAgenda ? ' active' : ''}`} replace>Agenda</NavLink>
                <NavLink to="/contacto" className={`nav-link${matchContacto ? ' active' : ''}`} replace>Contacto</NavLink>

            </div>
        </nav>
    );
};

export default Navbar;
