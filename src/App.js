import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CivilizationsVoxelverse from "./pages/CivilizationsVoxelverse";
import DogDays from "./pages/DogDays";
import Articles from "./pages/Articles";
import Tv from "./pages/Tv";
import NotFoundPage from "./pages/NotFoundPage";
import "./App.scss";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="civilizations-voxelverse-nfts" element={<CivilizationsVoxelverse />} />
        <Route path="tv" element={<Tv />}  />
        <Route path="dog-days" element={<DogDays />} />
        <Route path="dog-days/:id/:title" element={<Articles />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
