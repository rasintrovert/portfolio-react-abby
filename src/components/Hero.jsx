import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Hero.css";
import Bouton from "./Bouton";
import imageMoi from "../assets/Moi.jpg";
import { Link } from "react-router-dom";   // si pas déjà importé


const Hero = () => {
    const [showIntrovert, setShowIntrovert] = useState(false);

    return (
        <section className="hero">
            <div className="hero-left">
                <img src={imageMoi} alt="Illustration de Abigaëlle" />
            </div>

            <div className="hero-right">
                <AnimatePresence mode="wait">
                    {!showIntrovert ? (
                        <motion.div
                            key="abigaelle"
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 50, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h1>Régina Serrera Abigaëlle Jean</h1>
                            <p>
                                Je suis un codeuse à l’âme littéraire. <br />
                                Étudiante en Sciences Informatiques et Gestion des Affaires. <br />
                                Je donne vie à des projets, je structure des idées, je bâtis des systèmes, je façonne la logique.
                            </p>
                            <div className="switch-container" onClick={() => setShowIntrovert(true)}>
                                <p>Mais parfois… une autre voix prend le relais.</p>
                            </div>
                            <div className="hero-buttons">
                                <Link to="/projets">
                                    <Bouton>Voir mes projets</Bouton>
                                </Link>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="introvert"
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -50, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h1>ras_introvert</h1>
                            <p>
                                C’est mon nom de plume. Mon refuge intérieur. <br />
                                J’écris pour ressentir, pour transmettre, pour questionner. <br />
                                À travers les mots, je me reconnecte à l’essentiel à ce qui palpite, au silence entre les lignes.
                            </p>
                            <div className="switch-container" onClick={() => setShowIntrovert(false)}>
                                <p>La plume repose… et les lignes de code reprennent.</p>
                            </div>
                            <div className="hero-buttons">
                                <Link to="/idees">
                                    <Bouton>Lire mes écrits</Bouton>
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Hero;
