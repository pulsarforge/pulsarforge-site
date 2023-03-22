import React, { useState, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "../components/layouts/Header";
import Markdown from "markdown-to-jsx";
import ArticlesJson from "../data/blog.json";
import Footer from "../components/layouts/Footer";

function Articles(props) {
  const metadataAllBlogs = ArticlesJson;
  const [content, setContent] = useState("");
  const blogFile = props.match.params.title;
  const blogId = props.match.params.id - 1;
  const articleId = metadataAllBlogs[blogId].id;
  const articleTitle = metadataAllBlogs[blogId].title;
  const articleDescription = metadataAllBlogs[blogId].description;
  const articleImage = metadataAllBlogs[blogId].image;

  useEffect(() => {
    import(`../blog/${blogFile}.md`)
      .then((res) => res.default)
      .then((res) => {
        fetch(res)
          .then((result) => result.text())
          .then((result) => setContent(result));
      });
  }, [content, blogFile]);

  const [toggleMenu, setToggleMenu] = useState(false);

  const headerToggler = (e) => {
    e.preventDefault();
    setToggleMenu(!toggleMenu);
  };

  document.addEventListener("click", function (e) {
    if (e.target.closest(".content")) {
      setToggleMenu(false);
    }
  });

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{`${articleTitle}`}</title>
          <meta property="og:type" content="article" />
          <meta name="description" content={articleDescription} />
          <meta property="og:image" content={articleImage} />
          <meta property="og:author" content="Pulsarforge" />
          <meta property="og:image:width" content="512" />
          <meta property="og:image:height" content="512" />
        </Helmet>
      </HelmetProvider>
      <Header
        logoSource="/images/pulsarforge-logo-font.png"
        toggleMenu={toggleMenu}
        headerToggler={headerToggler}
      />
      <p>{articleId}</p>
      <br />
      <br />
      <br />
      <main>
        <div className="spacer" data-height="96"></div>
        <div className="blog-page-section">
          <div className="container">
            <div className="blog-single shadow-dark p-30">
              <Markdown>{content}</Markdown>
            </div>
          </div>
        </div>
        <div className="spacer" data-height="96"></div>
      </main>
      <Footer />
    </>
  );
}

export default Articles;
