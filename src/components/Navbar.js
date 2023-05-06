import React, { useState } from 'react';
import Logo from './Navbar/Logo';
import NavLinkList from './Navbar/Navlinklist';
import '../styles/Navbar.css';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={`navbar${menuOpen ? ' active' : ''}`}>
            <Logo />
            <div className='hamburger' onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <NavLinkList menuOpen={menuOpen} />
        </nav>
    );
}

export default Navbar;
