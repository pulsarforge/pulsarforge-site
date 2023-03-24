import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import CivilizationsVoxelverse from "./pages/CivilizationsVoxelverse";
import Blog from "./pages/Blog";
import Articles from "./pages/Articles";
import NotFoundPage from "./pages/NotFoundPage";
import "./App.scss";
import StrategicActionLive from "./pages/StrategicActionLive";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/civilizations-voxelverse-nfts" component={CivilizationsVoxelverse} exact />
        <Route path="/strategic-action-live" component={StrategicActionLive} exact />
        <Route path="/blog" component={Blog} exact />
        <Route path="/blog/:id/:title" component={Articles} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
