// src/pages/APropos.jsx
import React from "react";
import PageWrapper from "../components/PageWrapper";
import CartesPhilosophie from "../components/CartesPhilosophie"; // ✅ ajouté ici
import ParcoursTimeline from "../components/ParcoursTimeline"; // ✅ ajouté ici
import "./APropos.css";

export default function APropos() {
    return (
        <PageWrapper>
            <div className="a-propos-page">
                {/* 1. Introduction courte */}
                <section className="intro-section">
                    <h1>À propos de moi</h1>
                    <p>Entre rigueur informatique et plume introspective, je me trace un chemin singulier.</p>
                </section>

                {/* 2. Compétences & Philosophie (avec le composant Uiverse stylisé) */}
                <section className="cards-section">
                    <CartesPhilosophie />
                </section>

                {/* 3. Timeline "Mon parcours" */}
                <section className="timeline-section">
                    <h2>Mon parcours</h2>
                    <ParcoursTimeline />
                </section>

                {/* 4. Mini CV moderne */}
                <section className="cv-section">
                    <h2>Mon CV express</h2>
                    {/* On construira une carte ou une grille */}
                </section>

                {/* 5. Citation */}
                <section className="citation-section">
                    <blockquote>
                        “Je veux bâtir des outils numériques qui ont du sens pour ma génération.”
                    </blockquote>
                </section>

                {/* 6. Bouton contact */}
                <div className="contact-button">
                    {/* Tu peux insérer ton composant <Bouton> ici */}
                </div>
            </div>
        </PageWrapper>
    );
}
