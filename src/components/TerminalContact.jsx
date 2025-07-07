import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../pages/Contact.css";

export default function TerminalContact() {
    const [step, setStep] = useState(0); // 0 = intro, 1 = formulaire, 2 = confirmation
    const [motif, setMotif] = useState("");
    const [formData, setFormData] = useState({ nom: "", email: "", message: "" });
    const [typedLines, setTypedLines] = useState([]);
    const [lineIndex, setLineIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);

    const lines = [
        "> boot --init abby.sh",
        "chargement des modules...",
        "connexion au terminal poétique...",
        "> contact.sh --start",
        "Bonjour, humain. Moi c’est abby.sh, IA de liaison créative.",
        "Pourquoi veux-tu contacter Abigaëlle ?",
    ];

    useEffect(() => {
        if (step === 0 && lineIndex < lines.length) {
            const timeout = setTimeout(() => {
                setTypedLines((prev) => [...prev, lines[lineIndex]]);
                setLineIndex((prev) => prev + 1);
            }, 1000);
            return () => clearTimeout(timeout);
        }
        if (lineIndex === lines.length) {
            setShowCursor(false); // Stop blinking cursor once all lines are shown
        }
    }, [lineIndex, step]);

    const handleMotifSelect = (selected) => {
        setMotif(selected);
        setStep(1);
    };

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("📦 Données envoyées :", { motif, ...formData });

        setStep(2);

        // Réinitialisation après 5 secondes
        setTimeout(() => {
            setStep(0);
            setMotif("");
            setFormData({ nom: "", email: "", message: "" });
            setTypedLines([]);
            setLineIndex(0);
            setShowCursor(true);
        }, 5000);
    };

    return (
        <div className="terminal-container">
            <div className="terminal-screen">
                <AnimatePresence mode="wait">
                    {step === 0 && (
                        <motion.div
                            key="intro"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="terminal-block"
                        >
                            {typedLines.map((line, idx) => (
                                <pre key={idx} className="terminal-line">
                                    {line}
                                </pre>
                            ))}

                            {showCursor && (
                                <pre className="terminal-line"><span className="cursor">█</span></pre>
                            )}

                            {!showCursor && (
                                <ul className="choices-list">
                                    <li onClick={() => handleMotifSelect("voir-projet")}>
                                        [1] Voir un projet complet 🔍
                                    </li>
                                    <li onClick={() => handleMotifSelect("collaboration")}>
                                        [2] Collaborer sur une idée 💡
                                    </li>
                                    <li onClick={() => handleMotifSelect("services")}>
                                        [3] L’embaucher pour un service ✍️
                                    </li>
                                    <li onClick={() => handleMotifSelect("encouragement")}>
                                        [4] Lui envoyer un mot doux 💖
                                    </li>
                                </ul>
                            )}
                        </motion.div>
                    )}

                    {step === 1 && (
                        <motion.form
                            key="formulaire"
                            onSubmit={handleSubmit}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="terminal-form"
                        >
                            <pre className="terminal-line">{'> motif: '}{motif}</pre>

                            <label>Nom complet :</label>
                            <input
                                type="text"
                                name="nom"
                                onChange={handleChange}
                                value={formData.nom}
                                required
                            />

                            <label>Email :</label>
                            <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                value={formData.email}
                                required
                            />

                            <label>
                                {motif === "services"
                                    ? "Décris le service dont tu as besoin :"
                                    : motif === "collaboration"
                                        ? "Sur quelle idée veux-tu collaborer ?"
                                        : motif === "voir-projet"
                                            ? "Quel projet souhaites-tu voir en entier ?"
                                            : "Ton message :"}
                            </label>
                            <textarea
                                name="message"
                                onChange={handleChange}
                                value={formData.message}
                                required
                            />

                            <button type="submit" className="btn-terminal">Envoyer ✉️</button>
                        </motion.form>
                    )}

                    {step === 2 && (
                        <motion.div
                            key="fin"
                            className="terminal-block"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            <pre className="terminal-line">{'> transmission réussie ✅'}</pre>
                            <pre className="ia-text">
                                🌸 Message bien reçu.{"\n"}
                                Le terminal se déconnecte...{"\n"}
                                Mais Abigaëlle te répondra très bientôt,{"\n"}
                                en humain et avec douceur 💌
                            </pre>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
