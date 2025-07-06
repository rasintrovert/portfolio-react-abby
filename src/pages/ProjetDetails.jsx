import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import PageWrapper from "../components/PageWrapper";
import Bouton from "../components/Bouton";

const projetsSimules = [
    {
        slug: "portfolio-react",
        titre: "Portfolio React",
        categorie: "Web Dev",
        niveau: "Intermédiaire",
        descriptionCourte: "Un devoir React pour créer un site personnel responsive.",
        descriptionLongue: `Ce projet a été réalisé dans le cadre du module Front-End.
Il s'agissait de construire un portfolio personnel en React, capable d'afficher mes projets, mon parcours et un formulaire de contact. J'ai utilisé React Router pour le routage, styled-components pour le design, et Lazy Loading pour les performances.

💡 Difficultés :
• Mettre en place un système de routing dynamique
• Appliquer une logique de thème clair/sombre
• Organiser les composants de manière réutilisable

🔧 Compétences développées :
- React (hooks, composants)
- Navigation dynamique
- Responsive design sans framework externe (ex. Tailwind, Bootstrap)
- Accessibilité et structure sémantique`,
        code: `// src/pages/Projets.jsx
import React from "react";
import CarteProjet from "../components/CarteProjet";
import projets from "../data/projets";

export default function Projets() {
  return (
    <section>
      <h1>Mes projets</h1>
      <div className="projets-grid">
        {projets.map((projet, index) => (
          <CarteProjet key={index} {...projet} />
        ))}
      </div>
    </section>
  );
}

// src/components/CarteProjet.jsx
import React from "react";
export default function CarteProjet({ titre, description }) {
  return (
    <div className="carte">
      <h2>{titre}</h2>
      <p>{description}</p>
    </div>
  );
}`
    },
    {
        slug: "journal-spirituel",
        titre: "Journal Spirituel",
        categorie: "Desktop App",
        niveau: "Débutant",
        descriptionCourte: "Application Tkinter pour écrire et méditer sur des versets bibliques.",
        descriptionLongue: `Ce projet a été conçu pour apprendre à créer une interface graphique avec Python. L'application permet à l'utilisateur d’écrire ses pensées, sauvegarder ses versets préférés et méditer.

💡 Difficultés :
• Gérer la sauvegarde des données sans base de données
• Créer plusieurs fenêtres avec Tkinter
• Adapter l’interface pour qu’elle soit agréable à lire

🔧 Compétences développées :
- Interfaces Tkinter (widgets, pack/grid)
- Lecture/écriture de fichiers JSON
- Organisation de code en fonctions/classe`,
        code: `from tkinter import *
import json

# Initialisation
root = Tk()
root.title("Journal Spirituel")
root.geometry("500x400")

# Chargement / sauvegarde
def sauvegarder():
    texte = entree.get("1.0", END).strip()
    with open("journal.json", "w", encoding="utf-8") as f:
        json.dump({"note": texte}, f)

# Widgets
Label(root, text="Note du jour").pack(pady=10)
entree = Text(root, height=15)
entree.pack()

Button(root, text="Sauvegarder", command=sauvegarder).pack(pady=10)

root.mainloop()`
    },
    {
        slug: "lbms",
        titre: "LBMS - Library Book Management System",
        categorie: "C# / WinForms",
        niveau: "Avancé",
        descriptionCourte: "Un système complet de gestion de bibliothèque avec base de données.",
        descriptionLongue: `Projet développé dans le cadre du module Programmation Orientée Objet.
Objectif : permettre à une bibliothèque universitaire de gérer ses livres, les prêts, les retours et les utilisateurs.

💡 Difficultés :
• Connexion à MySQL avec C#
• Séparation logique UI / base de données
• Gestion des erreurs et transactions

🔧 Compétences développées :
- Programmation orientée objet (classes, méthodes, encapsulation)
- Connexion MySQL via MySqlConnector
- Utilisation de WinForms pour créer une interface complète
- Gestion des états (livre disponible / emprunté)`,
        code: `// Classe Livre.cs
public class Livre {
    public int Id { get; set; }
    public string Titre { get; set; }
    public string Auteur { get; set; }
    public bool Disponible { get; set; }

    public Livre(int id, string titre, string auteur, bool dispo) {
        Id = id;
        Titre = titre;
        Auteur = auteur;
        Disponible = dispo;
    }
}

// Connexion MySQL
string connStr = "server=localhost;user=root;database=biblio;port=3306;";
MySqlConnection conn = new MySqlConnection(connStr);
conn.Open();
MySqlCommand cmd = conn.CreateCommand();
cmd.CommandText = "SELECT * FROM livres";
MySqlDataReader rdr = cmd.ExecuteReader();
while (rdr.Read()) {
    Console.WriteLine(rdr["Titre"]);
}
conn.Close();`
    },
];

export default function ProjetDetails() {
    const { slug } = useParams();

    // Recherche du projet par slug
    const projet = projetsSimules.find((p) => p.slug === slug);

    if (!projet) {
        return (
            <PageWrapper>
                <StyledProjet>
                    <h2>Projet introuvable</h2>
                    <Link to="/projets">
                        <Bouton texte="← Retour aux projets" />
                    </Link>
                </StyledProjet>
            </PageWrapper>
        );
    }

    return (
        <PageWrapper>
            <StyledProjet>
                <h1>{projet.titre}</h1>

                <div className="meta">
                    <span className="badge">{projet.categorie}</span>
                    <span className="niveau">Niveau : {projet.niveau}</span>
                </div>

                <p>{projet.descriptionLongue}</p>

                <div className="code-block">
                    <h3>Extrait de code</h3>
                    <pre>
                        <code>{projet.code}</code>
                    </pre>
                </div>

                <div className="btns">
                    <Link to="/projets">
                        <Bouton texte="← Retour aux projets" />
                    </Link>
                    <Link to="/contact">
                        <Bouton texte="💌 Me contacter" />
                    </Link>
                </div>
            </StyledProjet>
        </PageWrapper>
    );
}

const StyledProjet = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 2rem 1rem;

  h1 {
    font-size: 2rem;
    margin-bottom: 0.8rem;
    color: var(--main-text);
  }

  .meta {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  .badge {
    background-color: #ffecec;
    color: var(--highlight);
    font-size: 0.78rem;
    padding: 4px 10px;
    border-radius: 999px;
    font-weight: 500;
    border: 1px solid #f4a6a6;
  }

  .niveau {
    font-size: 0.85rem;
    font-weight: 600;
    color: #666;
  }

  p {
    font-size: 1.05rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    color: var(--secondary-text);
    white-space: pre-wrap;
  }

  .code-block h3 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }

  pre {
    background-color: #f9f4f0;
    border-left: 4px solid var(--highlight);
    padding: 1rem;
    border-radius: 6px;
    overflow-x: auto;
    font-size: 0.9rem;
    margin-bottom: 2rem;
  }

  .btns {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
`;


