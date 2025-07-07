import React from "react";
import PageWrapper from "../components/PageWrapper";
import CartesPhilosophie from "../components/CartesPhilosophie";
import ParcoursTimeline from "../components/ParcoursTimeLine";
import "./APropos.css";
import Bouton from "../components/Bouton";
import { Link } from "react-router-dom";


export default function APropos() {
    return (
        <PageWrapper>
            <div className="a-propos-page">
                <section className="intro-section">
                    <h1>À propos de moi</h1>
                    <p>Entre rigueur informatique et plume introspective, je me trace un chemin singulier.</p>
                </section>

                <section className="cards-section">
                    <CartesPhilosophie />
                </section>

                <section className="timeline-section">
                    <h2>Mon parcours</h2>
                    <ParcoursTimeline />
                </section>

                <section className="cv-section">
                    <h2>Mon CV express</h2>
                    <div className="cv-grid">
                        <div className="cv-item">
                            <h3>📍 Localisation & Études</h3>
                            <p>📍 Haïti</p>
                            <p>🎓 Université Espoir de Calvary Chapel</p>
                            <p>Sciences Informatiques & Gestion des Affaires</p>
                            <p>2024 - en cours</p>
                        </div>

                        <div className="cv-item">
                            <h3>💻 Compétences techniques</h3>
                            <ul>
                                <li>React, HTML/CSS, JavaScript</li>
                                <li>C#, Python, SQL</li>
                                <li>Tailwind, Git, UI/UX</li>
                            </ul>
                        </div>

                        <div className="cv-item">
                            <h3>🧠 Soft Skills</h3>
                            <ul>
                                <li>Créativité & curiosité</li>
                                <li>Empathie & adaptabilité</li>
                                <li>Travail sous pression</li>
                                <li>Autonomie & sens du détail</li>
                            </ul>
                        </div>

                        <div className="cv-item">
                            <h3>🛠️ Projets</h3>
                            <ul>
                                <li>Portfolio personnel (React)</li>
                                <li>Journal spirituel (Tkinter)</li>
                                <li>LBMS - Gestion de bibliothèque (C#)</li>
                            </ul>
                        </div>

                        <div className="cv-item">
                            <h3>📚 Langues</h3>
                            <ul>
                                <li>Français (natif)</li>
                                <li>Créole haïtien (natif)</li>
                                <li>Anglais (niveau intermédiaire)</li>
                            </ul>
                        </div>

                        <div className="cv-item">
                            <h3>🌱 Valeurs & motivation</h3>
                            <p>
                                Créer avec intention. Apprendre avec passion.
                                Écrire avec sincérité. Coder pour servir et inspirer.
                            </p>
                        </div>
                    </div>
                </section>


                <section className="citation-section">
                    <blockquote>
                        “Je veux bâtir des outils numériques qui ont du sens pour ma génération.”
                    </blockquote>
                </section>

                <div className="contact-button">
                    <Link to="/contact">
                        <Bouton>Me contacter</Bouton>
                    </Link>
                </div>

            </div>
        </PageWrapper>
    );
}
