import React, { useState } from "react";
import styled from "styled-components";

const parcours = [
    {
        couleur: "#f4c7c3",
        date: "2021",
        titre: "Naissance d'une passion ✍️",
        texte:
            "C’est en classe de 3ᵉ que ma prof de français m’a aidée à découvrir mon amour pour l’écriture. Depuis, je n’ai jamais arrêté d’aligner les mots comme on tisse un fil entre le cœur et le monde.",
    },
    {
        couleur: "#ffeae2",
        date: "2022",
        titre: "Premier code 🐍",
        texte:
            "En classe de Seconde, je découvre la programmation avec Python. Les lignes de code deviennent un langage nouveau, une forme d’expression structurée, logique et étonnamment créative.",
    },
    {
        couleur: "#f5d0d0",
        date: "2023",
        titre: "Exploration littéraire 📘",
        texte:
            "Je continue à écrire, j’explore des thèmes plus personnels, je façonne ma voix. Mes textes deviennent des miroirs intérieurs, des refuges et parfois des cris doux.",
    },
    {
        couleur: "#fff6ec",
        date: "2024",
        titre: "Entrée à l’Université 🎓",
        texte:
            "Je rejoins l’Université Espoir de Calvary Chapel pour étudier les Sciences Informatiques. Un nouveau chapitre commence, riche en apprentissages et en découvertes sur moi-même.",
    },
    {
        couleur: "#eac0c0",
        date: "2025",
        titre: "Projets créatifs 💡",
        texte:
            "Je crée des outils numériques utiles, alignés avec mes valeurs. J’essaie de tisser ensemble code, gestion, écriture et foi. L'utile et le beau ne sont jamais incompatibles.",
    },
    {
        couleur: "#d3b8ae",
        date: "2026 (à venir)",
        titre: "Vision en construction 🚀",
        texte:
            "Je poursuis mon chemin. Je rêve de projets à impact, d’outils qui parlent au cœur. Je marche avec mes convictions, mes intuitions et une créativité que je continue de découvrir.",
    },
];

const ParcoursTimeline = () => {
    const [hovered, setHovered] = useState(null);

    return (
        <StyledWrapper>
            <div className="cards">
                {parcours.map((etape, index) => (
                    <div
                        key={index}
                        className="card"
                        style={{
                            backgroundColor: etape.couleur,
                            transform:
                                hovered === null
                                    ? "scale(1)"
                                    : hovered === index
                                        ? "scale(1.05)"
                                        : "scale(0.93)",
                            filter:
                                hovered === null
                                    ? "none"
                                    : hovered === index
                                        ? "none"
                                        : "blur(1.5px)",
                            zIndex: hovered === index ? 2 : 1,
                        }}
                        onMouseEnter={() => setHovered(index)}
                        onMouseLeave={() => setHovered(null)}
                    >
                        <p className="tip">{etape.date}</p>
                        <p className="second-text">
                            <strong>{etape.titre}</strong>
                            <br />
                            {etape.texte}
                        </p>
                    </div>
                ))}
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 2.5rem 0;

  .cards {
    display: flex;
    flex-direction: column;
    gap: 22px;
    width: 100%;
    align-items: center;
  }

  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1.5rem 2rem;
    width: 90%;
    max-width: 900px;
    border-radius: 16px;
    color: #3c3c3c;
    cursor: pointer;
    transition: all 0.4s ease;
    text-align: left;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
    backdrop-filter: blur(3px);
  }

  .card p.tip {
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 0.6rem;
    color: #5a3c3c;
  }

  .card p.second-text {
    font-size: 1rem;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    .cards {
      gap: 16px;
    }

    .card {
      padding: 1.2rem;
    }
  }
`;

export default ParcoursTimeline;
