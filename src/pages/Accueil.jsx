import React from 'react';
import Bouton from '../components/Bouton';

function Accueil() {
    return (
        <section className="accueil">
            <div className="accueil-content">
                <h1>Bienvenue, moi c’est Abigaëlle Jean</h1>
                <p className="sous-titre">
                    Étudiante en Informatique et Gestion, passionnée par l’écriture et la création numérique.
                </p>

                <Bouton onClick={() => window.location.href = "#projets"}>
                    Voir mes projets
                </Bouton>
            </div>
        </section>
    );
}

export default Accueil;
