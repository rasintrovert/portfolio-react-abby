import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Header.css';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <header className="header">
            <div className="nav-container">
                <NavLink to="/" className="logo" onClick={closeMenu}>
                    R. A. S. JEAN
                </NavLink>
                <button className="menu-toggle" onClick={toggleMenu} aria-label="Menu">
                    ☰
                </button>
                <nav className={`nav ${isOpen ? 'open' : ''}`}>
                    <NavLink to="/" className="nav-link" end onClick={closeMenu}>Accueil</NavLink>
                    <NavLink to="/a-propos" className="nav-link" onClick={closeMenu}>A propos</NavLink>
                    <NavLink to="/projets" className="nav-link" onClick={closeMenu}>Projets</NavLink>
                    <NavLink to="/idees" className="nav-link" onClick={closeMenu}>Idées</NavLink>
                    <NavLink to="/ecriture" className="nav-link" onClick={closeMenu}>Ecriture</NavLink>
                    <NavLink to="/contact" className="nav-link" onClick={closeMenu}>Contact</NavLink>
                </nav>
            </div>
        </header>
    );
}
