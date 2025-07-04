import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css'; //We'll create this file later

export default function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <NavLink to="/" className="nav-link" end>Accueil</NavLink>
                <NavLink to="/a-propos" className="nav-link">A propos</NavLink>
                <NavLink to="/projets" className="nav-link">Projets</NavLink>
                <NavLink to="/idees" className="nav-link">Idées</NavLink>
                <NavLink to="/ecriture" className="nav-link">Ecriture</NavLink>
                <NavLink to="/contact" className="nav-link">Contact</NavLink>
            </nav>
        </header>

    );
}