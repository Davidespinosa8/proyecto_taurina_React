import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
    return (
        <nav className='navbar'>
            <h1 className="fuente-logo">Taurina</h1>
                <div className='nav-link-container'>
                    <ul className='nav-links'>
                        <li>
                        <a href="#inicio" className='nav-link'>Inicio</a>
                        </li>
                        <li>
                        <a href="#cursos" className='nav-link'>Cursos</a>
                        </li>
                        <li>
                        <a href="#galeria" className='nav-link'>Galeria</a>
                        </li>
                        <li>
                        <a href="#contacto" className='nav-link'>Contacto</a>
                        </li>
                    </ul>
                </div>
        </nav>
    );
}

export default Navbar;