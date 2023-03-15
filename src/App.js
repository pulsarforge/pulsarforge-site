import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import CivilizationsVoxelverse from "./pages/CivilizationsVoxelverse";
import Blog from "./pages/Blog";
import Articles from "./pages/Articles";
import NotFoundPage from "./pages/NotFoundPage";
import "./App.scss";
import DevBlog from "./pages/DevBlog";
import DevBlogArticles from "./pages/DevBlogArticles";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/civilizations-voxelverse-nfts" component={CivilizationsVoxelverse} exact />
        <Route path="/dev-blog" component={DevBlog} exact />
        <Route path="/dev-blog/:id/:title" component={DevBlogArticles} />
        <Route path="/blog" component={Blog} exact />
        <Route path="/blog/:id/:title" component={Articles} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
