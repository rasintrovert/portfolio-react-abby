import React from "react";
import "./Footer.css";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__row">
                <span className="footer__identity">
                    Abigaëlle Jean • 📍 Haïti
                </span>

                <nav className="footer__nav">
                    <a href="/">Accueil</a>
                    <a href="/a-propos">À propos</a>
                    <a href="/projets">Projets</a>
                    <a href="/idees">Idées</a>
                    <a href="/ecriture">Ecriture</a>
                    <a href="/contact">Contact</a>
                </nav>

                <div className="footer__socials">
                    <a href="mailto:abby@example.com" target="_blank" rel="noopener noreferrer">Email</a>
                    <a href="https://github.com/rasintrovert" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://www.instagram.com/ras_introvert?utm_source=qr&igsh=MXg1emZ0dWE0bmY1Mw==" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
            </div>

            <div className="footer__bottom">
                <p>© {year} Abigaëlle Jean • Portfolio personnel</p>
                <p className="footer__thankyou">Merci pour ta visite 🌸</p>
            </div>
        </footer>
    );
}
