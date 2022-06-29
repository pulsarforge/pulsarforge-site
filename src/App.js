import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage3Dark from "./pages/Homepage3Dark";
import NFTs from "./pages/NFTs";
import NFTsOnFlow from "./pages/NFTsOnFlow";
import Bloglist from "./pages/Bloglist";
import BlogDetails from "./pages/BlogDetails";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Homepage3Dark />
        </Route>
        <Route path="/civilizations-voxelverse-nfts" exact>
          <NFTs />
        </Route>
        <Route path="/voxelverse-onflow-mint" exact>
          <NFTsOnFlow />
        </Route>
        <Route path="/blogs" component={Bloglist} exact />
        <Route path="/blogs/blog-details/:id/:title" component={BlogDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
