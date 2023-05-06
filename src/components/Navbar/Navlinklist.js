import React from 'react';
import './Navlinks.css';

function NavLinkList({ menuOpen }) {
    return (
        <div className={`nav-link-container${menuOpen ? ' active' : ''}`}>
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
    );
}

export default NavLinkList;

