// src/components/Hero.jsx
import React from "react";
import "./Hero.css";
import Button from "./Button";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-left">
                {/* Remplace ce lien par ton image ou illustration */}
                <img
                    src="https://via.placeholder.com/400x400.png?text=Ton+Image"
                    alt="Illustration de Abigaëlle"
                />
            </div>
            <div className="hero-right">
                <h1>Bienvenue, moi c’est Abigaëlle Jean</h1>
                <p>
                    Étudiante en Informatique et Gestion, passionnée par l’écriture et la
                    création numérique.
                </p>
                <Button />
            </div>
        </section>
    );
};

export default Hero;
