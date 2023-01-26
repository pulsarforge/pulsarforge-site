import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage3Dark from "./pages/Homepage3Dark";
import CivilizationsVoxelverse from "./pages/CivilizationsVoxelverse";
import Bloglist from "./pages/Bloglist";
import Articles from "./pages/Articles";
import NotFoundPage from "./pages/NotFoundPage";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Homepage3Dark} exact />
        <Route path="/civilizations-voxelverse-nfts" component={CivilizationsVoxelverse} exact />
        <Route path="/blogs" component={Bloglist} exact />
        <Route path="/blogs/:id/:title" component={Articles} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
