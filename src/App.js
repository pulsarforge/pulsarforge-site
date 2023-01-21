import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage3Dark from "./pages/Homepage3Dark";
import CivilizationsVoxelverse from "./pages/CivilizationsVoxelverse";
import Bloglist from "./pages/Bloglist";
import Articles from "./pages/Articles";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Homepage3Dark />
        </Route>
        <Route path="/civilizations-voxelverse-nfts" exact>
          <CivilizationsVoxelverse />
        </Route>
        <Route path="/blogs" component={Bloglist} exact />
        <Route path="/blogs/:id/:title" component={Articles} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
