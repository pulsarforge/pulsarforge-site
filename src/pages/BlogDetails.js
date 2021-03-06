import React, { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";
import Header3 from "../components/layouts/Header3";
import { Helmet } from "react-helmet";

function BlogDetails(props) {
  const [content, setContent] = useState("");
  const blogFile = props.match.params.title;

  useEffect(() => {
    import(`../blogs/${blogFile}.md`)
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

  // document.body.classList.add("dark");
  //Uncomment the above line if you use dark version

  return (
    <>
      <Helmet>
        <title>Blog Articles of Software Engineering, Web3, Metaverse.</title>
        <meta name="description" content="Key updates on developments, about Software Engineering, Web3, Metaverse, showcase place for the developer team, coding internal tools and  programming for clients" />
      </Helmet>
      <Header3
        logoSource="/images/PulsarForge-1.png"
        toggleMenu={toggleMenu}
        headerToggler={headerToggler}
      />
      <main>
        <div className="spacer" data-height="96"></div>
        <div className="blog-page-section">
          <div className="container">
            <div className="blog-single shadow-dark p-30"style={{paddingTop: 100}}>
              <Markdown>{content}</Markdown>
            </div>
          </div>
        </div>
        <div className="spacer" data-height="96"></div>
      </main>
    </>
  );
}

export default BlogDetails;
