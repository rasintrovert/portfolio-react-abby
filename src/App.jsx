import { Routes, Route } from "react-router-dom";

import Accueil from "./pages/Accueil";
import APropos from "./pages/APropos";
import Projets from "./pages/Projets";
import Idees from "./pages/Idees";
import Ecriture from "./pages/Ecriture";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/a-propos" element={<APropos />} />
      <Route path="/projets" element={<Projets />} />
      <Route path="/idees" element={<Idees />} />
      <Route path="/ecriture" element={<Ecriture />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
