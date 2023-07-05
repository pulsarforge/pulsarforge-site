import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CivilizationsVoxelverse from "./pages/CivilizationsVoxelverse";
import DogDays from "./pages/DogDays";
import Articles from "./pages/Articles";
import Skill from "./pages/Skills";
import NotFoundPage from "./pages/NotFoundPage";
import "./App.scss";
import Missions from "./pages/Missions";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="missions" element={<Missions />} />
        <Route path="civilizations-voxelverse" element={<CivilizationsVoxelverse />} />
        <Route path="skills" element={<Skill />}  />
        <Route path="dog-days" element={<DogDays />} />
        <Route path="dog-days/:id/:title" element={<Articles />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
