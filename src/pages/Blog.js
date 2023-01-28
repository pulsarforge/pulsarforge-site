import React, { useState, useEffect } from "react";
import Header3 from "../components/layouts/Header3";
import BlogElement from "../components/elements/Blog";
import Pagination from "../components/elements/Pagination";
import { Helmet } from "react-helmet";
import Footer from "../components/layouts/Footer";
import Pagetitle from "../components/elements/Pagetitle";
import BlogJson from "../data/blog.json";

const allBlogs = BlogJson;

function Blog() {
  // document.body.classList.add("dark");
  //Uncomment the above line if you use dark version

  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(16);

  useEffect(() => {
    setPosts(allBlogs);
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

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
      <Helmet>
        <title>Blog Software Engineering, Web3, UX, and Beyond</title>
        <meta name="description" content="Writing for fun about, dev, web3, projects, user experience and beyond" />
      </Helmet>
      <Header3
        logoSource="/images/PulsarForge-1.png"
        toggleMenu={toggleMenu}
        headerToggler={headerToggler}
      />
      <main style={{backgroundColor: "rgb(24, 24, 24)"}}>
        <div className="spacer" data-height="96"></div>
        <div className="blog-page-section" style={{backgroundColor: "rgb(24, 24, 24)"}}>
          <div className="container">
            <div className="row blog-wrapper fix-spacing" style={{paddingTop: 35}}>
              <div style={{marginTop: 40, textAlign: "center"}}>
                <Pagetitle title="Free Style" />
              </div>
              {currentPosts.map((blogItem) => (
                <div className="col-md-3" key={blogItem.id}>
                  <BlogElement blogData={blogItem} />
                </div>
              ))}
            </div>
            <div className="spacer" data-height="50"></div>
            {!(posts.length > postsPerPage) ? null : (
              <Pagination
                itemsPerPage={postsPerPage}
                totalItems={posts.length}
                paginate={paginate}
                currentPage={currentPage}
              />
            )}
          </div>
        </div>
        <div className="spacer" data-height="96"></div>
      </main>
      <Footer />
    </>
  );
}

export default Blog;
