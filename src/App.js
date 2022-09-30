import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage3Dark from "./pages/Homepage3Dark";
import CivilizationsVoxelverse from "./pages/CivilizationsVoxelverse";
import NFTsOnFlow from "./pages/NFTsOnFlow";
import Bloglist from "./pages/Bloglist";
import LifeTimeLine from "./pages/LifeTimeLine";
import BlogDetails from "./pages/BlogDetails";
import "./App.scss";
import AwesomeXR from "./pages/AwesomeXR";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Homepage3Dark />
        </Route>
        <Route path="/awesome-x-name-resources" exact>
          <AwesomeXR />
        </Route>
        <Route path="/civilizations-voxelverse-nfts" exact>
          <CivilizationsVoxelverse />
        </Route>
        <Route path="/voxelverse-onflow-mint" exact>
          <NFTsOnFlow />
        </Route>
        <Route path="/timeline" exact>
          <LifeTimeLine />
        </Route>
        <Route path="/blogs" component={Bloglist} exact />
        <Route path="/blogs/blog-details/:id/:title" component={BlogDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
