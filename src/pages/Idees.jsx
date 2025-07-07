import React from "react";
import styled from "styled-components";
import PageWrapper from "../components/PageWrapper";
import Bouton from "../components/Bouton";
import { Link } from "react-router-dom";

const idees = [
    {
        emoji: "🧠",
        titre: "Framework IA éthique",
        description:
            "Un kit open-source pour évaluer les risques éthiques des modèles IA : checklist, impact et stratégie d’atténuation.",
        tags: ["Éthique IA", "Open Source", "Outils Développeurs"],
    },
    {
        emoji: "💰",
        titre: "Microfonds communautaire",
        description:
            "Plateforme de financement participatif sur blockchain, orientée projets sociaux locaux avec gouvernance transparente.",
        tags: ["Blockchain", "Crowdfunding", "Impact social"],
    },
    {
        emoji: "🧭",
        titre: "Néo-Routine",
        description:
            "Assistant intelligent pour créer des routines inspirantes et personnalisées, entre bien-être et productivité.",
        tags: ["Productivité", "IA", "Bien-être"],
    },
    {
        emoji: "📚",
        titre: "Mon Assistant Étudiant Haïti",
        description:
            "Outil numérique pour aider les étudiants haïtiens à mieux organiser leurs tâches, réviser, prier, et progresser.",
        tags: ["Éducation", "Haïti", "Organisation"],
    },
    {
        emoji: "🌍",
        titre: "Glossaire Culturel Multilingue",
        description:
            "App d’apprentissage qui explique les faux amis, expressions et nuances culturelles entre français, créole, anglais, etc.",
        tags: ["Langues", "Culture", "Multilingue"],
    },
];

export default function Idees() {
    return (
        <PageWrapper>
            <StyledIdees>
                <h1>Idées de projets</h1>
                <p className="intro">
                    Ce sont des idées qui m'enthousiasment et sur lesquelles j'aimerais collaborer.
                    <br />
                    Si l'une d'elles vous parle, n'hésitez pas à me contacter !
                </p>

                <div className="idees-grid">
                    {idees.map((idee, index) => (
                        <div key={index} className="idee-carte">
                            <div className="emoji">{idee.emoji}</div>
                            <div className="content">
                                <h3>{idee.titre}</h3>
                                <p>{idee.description}</p>
                                <div className="tags">
                                    {idee.tags.map((tag, i) => (
                                        <span key={i} className="tag">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <Link to="/contact" className="cta">
                                    Je veux contribuer →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <footer className="collab">
                    <h2>Une idée sur laquelle collaborer ?</h2>
                    <p>Je serais ravie d’en entendre parler !</p>
                    <Link to="/contact">
                        <Bouton>Me contacter</Bouton>
                    </Link>
                </footer>
            </StyledIdees>
        </PageWrapper>
    );
}

const StyledIdees = styled.div`
  padding: 2rem 1rem;
  max-width: 960px;
  margin: 0 auto;
  color: var(--main-text);

    h1 {
        text-align: center;
        font-size: 2rem;
        margin-bottom: 0.5rem;
    }

    .intro {
        text-align: center;
        font-size: 1rem;
        color: var(--secondary-text);
        margin-bottom: 2.5rem;
    }

    .idees-grid {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .idee-carte {
        background-color: #fff3e8;
        border-radius: 16px;
        border: 1px solid #f4a6a6;
        padding: 1.5rem;
        box-shadow: 0 4px 8px rgba(244, 166, 166, 0.1);
        transition: transform 0.3s ease;
    }
    .idee-carte:hover {
      transform: translateY(-6px);
      box-shadow: 0 8px 16px rgba(244, 166, 166, 0.2);
    }   
    .idee-carte:hover .emoji {
      background-color: #f4a6a6;
      color: #fffdf9;
    }
      


    .emoji {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #fceeee;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.6rem;
        flex-shrink: 0;
    }

    .content h3 {
        margin: 0;
        font-size: 1.15rem;
        font-weight: bold;
        color: var(--main-text);
    }

    .content p {
        margin: 0.4rem 0 0.8rem;
        font-size: 0.95rem;
        color: var(--secondary-text);
    }

    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.4rem;
        margin-bottom: 0.8rem;
    }

    .tag {
        background-color: #f5f5f5;
        color: #555;
        font-size: 0.75rem;
        padding: 4px 10px;
        border-radius: 999px;
    }

    .cta {
        font-size: 0.85rem;
        color: var(--highlight);
        text-decoration: none;
        font-weight: 500;
    }

    .cta:hover {
        text-decoration: underline;
    }

    .collab {
        text-align: center;
        margin-top: 4rem;
    }

    .collab h2 {
        font-size: 1.3rem;
        margin-bottom: 0.5rem;
    }

    .collab p {
        margin-bottom: 1rem;
        color: var(--secondary-text);
    }
`;
