import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/layouts/Header";
import Markdown from "markdown-to-jsx";
import ArticlesJson from "../data/dog-blogs.json";
import Footer from "../components/layouts/Footer";

function Articles() {
  const metadataAllBlogs = ArticlesJson;
  const [content, setContent] = useState("");
  const params = useParams();
  let blogFile = params.title;
  let blogId = params.id - 1;
  let articleId = metadataAllBlogs[blogId].id;

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
