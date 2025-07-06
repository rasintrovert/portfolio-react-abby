import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Header from "./components/Header.jsx";

import Accueil from "./pages/Accueil";
import APropos from "./pages/APropos";
import Projets from "./pages/Projets";
import Idees from "./pages/Idees";
import Ecriture from "./pages/Ecriture";
import Contact from "./pages/Contact";
import ProjetDetails from "./pages/ProjetDetails"; // ✅ à créer



function App() {
  const location = useLocation();

  return (
    <>
      <Header />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Accueil />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/idees" element={<Idees />} />
          <Route path="/ecriture" element={<Ecriture />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projets/:slug" element={<ProjetDetails />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
