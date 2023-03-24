import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import CivilizationsVoxelverse from "./pages/CivilizationsVoxelverse";
import Blog from "./pages/Blog";
import Articles from "./pages/Articles";
import Tv from "./pages/Tv";
import NotFoundPage from "./pages/NotFoundPage";
import "./App.scss";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/civilizations-voxelverse-nfts" component={CivilizationsVoxelverse} exact />
        <Route path="/tv" component={Tv} exact />
        <Route path="/blog" component={Blog} exact />
        <Route path="/blog/:id/:title" component={Articles} exact/>
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
