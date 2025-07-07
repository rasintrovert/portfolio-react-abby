import React from "react";
import PageWrapper from "../components/PageWrapper";
import CarteProjet from "../components/CarteProjet";
import portfolioImage from "../assets/portfolio.png";
import journalImage from "../assets/journal.png";
import lbmsImage from "../assets/lbms.png";
import "./Projets.css";
import Bouton from "../components/Bouton";
import { Link } from "react-router-dom";


const projets = [
    {
        titre: "Portfolio React",
        description:
            "Ce portfolio est un devoir de mon cours de Web Design. J’y ai appris à manipuler React et à concevoir une interface moderne. Le plus grand défi a été de créer des animations élégantes et de maintenir une structure claire dans le code. J’ai utilisé React Router pour le routage, styled-components pour le design, et Lazy Loading pour les performances.",
        image: portfolioImage,
        categorie: "Web Dev",
        slug: "portfolio-react",
    },
    {
        titre: "Journal spirituel",
        description:
            "Projet développé en Python (Tkinter) pour un devoir de programmation. L'application permet de réfléchir autour de versets bibliques. Le défi principal a été de structurer les catégories et d’adapter l’interface pour une utilisation simple et intuitive. J’ai appris à gérer les événements et à sauvegarder les données de manière persistante.",
        image: journalImage,
        categorie: "Desktop App",
        slug: "journal-spirituel",
    },
    {
        titre: "LBMS - C#",
        description:
            "Devoir universitaire en C# : un système de gestion de bibliothèque avec WinForms. J'ai rencontré des difficultés dans la navigation entre les fenêtres et la logique d’emprunt/retour, mais cela m’a permis de mieux comprendre la programmation orientée objet. J’ai utilisé des collections pour gérer les livres et les utilisateurs, et j’ai implémenté une interface utilisateur simple mais fonctionnelle.",
        image: lbmsImage,
        categorie: "C# / WinForms",
        slug: "lbms",
    },
];


export default function Projets() {
    return (
        <PageWrapper>
            <div className="projets-page">
                <section className="projets-header">
                    <h1>Mes projets</h1>
                    <p>Voici quelques projets que j’ai réalisés, chacun étant un reflet de ma créativité et de mon apprentissage.</p>
                </section>

                <section className="projets-grid">
                    {projets.map((projet, index) => (
                        <CarteProjet
                            key={index}
                            titre={projet.titre}
                            description={projet.description}
                            image={projet.image}
                            categorie={projet.categorie}
                            slug={projet.slug}
                        />
                    ))}
                </section>

                <section className="projets-footer">
                    <p>Tu veux découvrir d'autres idées ou projets en cours ?</p>
                    <Link to="/idees">
                        <Bouton>Mes idées de projets</Bouton>
                    </Link>
                </section>
            </div>
        </PageWrapper>
    );
}
