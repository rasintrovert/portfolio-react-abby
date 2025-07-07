import React, { useState } from "react";
import PageWrapper from "../components/PageWrapper";
import "./Ecriture.css";
import { Link } from "react-router-dom";
import Bouton from "../components/Bouton";

export default function Ecriture() {

    const textesPerso = [
        {
            titre: "Les silences",
            emoji: "🌫️",
            extrait: "Il y a des silences plus bruyants que mille mots...",
            texteComplet: "Il y a des silences plus bruyants que mille mots. Des instants suspendus entre le cœur et la voix. Ceux qu’on ne dit pas, mais qui pèsent dans la pièce comme un souffle arrêté."
        },
        {
            titre: "Respirer",
            emoji: "🕊️",
            extrait: "Respirer n’est pas seulement une fonction, c’est un acte de foi...",
            texteComplet: "Respirer n’est pas seulement une fonction, c’est un acte de foi. S’autoriser à exister, ici, maintenant. Même quand tout semble flou."
        },
        {
            titre: "Fragments",
            emoji: "💭",
            extrait: "Je vis en fragments. Parfois éparpillés, parfois lumineux...",
            texteComplet: "Je vis en fragments. Parfois éparpillés, parfois lumineux. Je recolle les morceaux avec des mots que j’invente, des rires que je devine."
        }
    ];

    const stylesEcriture = [
        {
            emoji: "📔",
            titre: "Journal introspectif",
            phrase: "Écrire pour comprendre mes hivers intérieurs.",
        },
        {
            emoji: "✨",
            titre: "Textes poétiques",
            phrase: "Mettre des émotions en lumière, sans ponctuation parfois.",
        },
        {
            emoji: "🧩",
            titre: "Fictions courtes",
            phrase: "Raconter des mondes miniatures, souvent inachevés.",
        },
        {
            emoji: "💡",
            titre: "Storytelling tech",
            phrase: "Humaniser les projets numériques, un mot à la fois.",
        },
        {
            emoji: "🖋️",
            titre: "Écriture sensible",
            phrase: "Allier sensibilité et structure, comme un code poétique.",
        },
        {
            emoji: "📖",
            titre: "Écriture scientifique",
            phrase: "Écrire pour comprendre les choses, comme un livre scientifique.",
        },
    ];


    const [selectedText, setSelectedText] = useState(null);
    const openModal = (index) => setSelectedText(index);
    const closeModal = () => setSelectedText(null);

    return (
        <PageWrapper>
            <section className="intro-ecriture">
                <p className="intro-citation">
                    “Avant d’écrire du code, j’écrivais des émotions. L’écriture est mon premier langage, celui qui me relie à moi-même.”
                </p>
            </section>

            <section className="biblio-section">
                <h2 className="section-title">Textes personnels</h2>
                <div className="biblio-grid">
                    {textesPerso.map((texte, index) => (
                        <div key={index} className="biblio-card">
                            <div className="biblio-header">
                                <span className="emoji">{texte.emoji}</span>
                                <h3 className="biblio-title">{texte.titre}</h3>
                            </div>
                            <p className="biblio-extrait">{texte.extrait}</p>
                            <button onClick={() => openModal(index)} className="btn-lire">Lire</button>
                        </div>
                    ))}
                </div>

                {selectedText !== null && (
                    <div className="modal-overlay" onClick={closeModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <h3>{textesPerso[selectedText].titre}</h3>
                            <p>{textesPerso[selectedText].texteComplet}</p>
                            <button onClick={closeModal} className="btn-fermer">Fermer</button>
                        </div>
                    </div>
                )}
            </section>

            <section className="styles-section">
                <h2 className="section-title">🎨 Mes styles d’écriture</h2>
                <div className="styles-grid">
                    {stylesEcriture.map((style, index) => (
                        <div key={index} className="style-card">
                            <div className="style-emoji">{style.emoji}</div>
                            <h3 className="style-title">{style.titre}</h3>
                            <p className="style-phrase">{style.phrase}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="paradoxe-section">
                <h2 className="section-title">🧠 Mon paradoxe créatif</h2>
                <div className="paradoxe-bloc">
                    <p>
                        Mon parcours navigue entre deux mondes qui semblent opposés :
                        <strong> l’univers rigoureux de la programmation</strong> et
                        <strong> la fluidité sensible de l’écriture</strong>.
                    </p>
                    <p>
                        Mais pour moi, coder et écrire partagent la même essence :
                        <em>ordonner le chaos, façonner le sens, révéler l’invisible</em>.
                    </p>
                    <p>
                        J’aime autant structurer une interface que ciseler une phrase.
                        L’un m’apprend la précision, l’autre l’intuition.
                    </p>
                </div>
            </section>

            <section className="services-section">
                <h2 className="section-title">🖋️ Mes services d’écriture</h2>
                <div className="services-grid">
                    <div className="service-card">
                        <span className="service-icon">✨</span>
                        <h3>Ghostwriting / blog</h3>
                        <p>J’écris pour des créateurs ou des blogs tech/lifestyle, en respectant leur ton et leur vision.</p>
                        <Link to="/contact" className="service-btn">Me contacter</Link>
                    </div>

                    <div className="service-card">
                        <span className="service-icon">📘</span>
                        <h3>Relecture & correction</h3>
                        <p>Je corrige vos textes (sites, projets étudiants, docs persos) pour plus de clarté et de fluidité.</p>
                        <Link to="/contact" className="service-btn">Me contacter</Link>
                    </div>

                    <div className="service-card">
                        <span className="service-icon">💡</span>
                        <h3>Storytelling de projets</h3>
                        <p>Je vous aide à raconter votre projet tech de manière humaine, captivante et compréhensible.</p>
                        <Link to="/contact" className="service-btn">Me contacter</Link>
                    </div>

                    <div className="service-card">
                        <span className="service-icon">🎨</span>
                        <h3>Mise en mots de maquettes</h3>
                        <p>Je transforme des wireframes en pages bien rédigées, sensibles et lisibles.</p>
                        <Link to="/contact" className="service-btn">Me contacter</Link>
                    </div>
                </div>
            </section>
            <section className="collab-section" id="contact">
                <p className="collab-message">
                    Tu écris aussi ? Tu veux illustrer ou mettre en page mes textes ?
                    Tu veux qu’on imagine quelque chose ensemble ?
                    <br />
                    <strong>Écris-moi.</strong>
                </p>
                <Link to="/contact">
                    <Bouton>Me contacter</Bouton>
                </Link>
            </section>

        </PageWrapper>
    );
}
