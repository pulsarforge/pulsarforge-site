import React, { useState, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "../components/layouts/Header";
import DevBlogElement from "../components/elements/DevBlog";
import Pagetitle from "../components/elements/Pagetitle";
import Pagination from "../components/elements/Pagination";
import DevFieldJson from "../data/dev-blog.json";
import Footer from "../components/layouts/Footer";

function DevBlog() {
  const allBlogs = DevFieldJson;
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

  useEffect(() => {
    setPosts(allBlogs);
  }, [allBlogs]);

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
      <HelmetProvider>
        <Helmet>
          <title>Dev Blog</title>
          <meta name="description" content="Writing about Software Engineering" />
        </Helmet>
      </HelmetProvider>
      <Header
        logoSource="/images/pulsarforge-logo-font.png"
        toggleMenu={toggleMenu}
        headerToggler={headerToggler}
      />
      <main>
        <div className="spacer" data-height="96"></div>
        <div className="blog-page-section">
          <div className="container">
            <div className="row blog-wrapper fix-spacing">
              <div className="page-title-center">
                <Pagetitle title="Dev Blog" />
              </div>
              {currentPosts.map((blogItem) => (
                <div className="col-md-3" key={blogItem.id}>
                  <DevBlogElement blogData={blogItem} />
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

export default DevBlog;
