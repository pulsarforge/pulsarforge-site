import React, { useState, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "../components/layouts/Header";
import BlogElement from "../components/elements/Blog";
import Pagetitle from "../components/elements/Pagetitle";
import Pagination from "../components/elements/Pagination";
import BlogJson from "../data/blog.json";
import Footer from "../components/layouts/Footer";

function Blog() {
  const allBlogs = BlogJson;
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(16);

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
          <title>Blog Software Engineering, Web3, UX, and Beyond</title>
          <meta name="description" content="Writing for fun about, dev, web3, projects, user experience and beyond" />
        </Helmet>
      </HelmetProvider>
      <Header
        logoSource="/images/pulsarforge-1.png"
        toggleMenu={toggleMenu}
        headerToggler={headerToggler}
      />
      <main>
        <div className="spacer" data-height="96"></div>
        <div className="blog-page-section">
          <div className="container">
            <div className="row blog-wrapper fix-spacing">
              <div className="page-title-center">
                <img  src="/images/dog-gg.jpg" style={{ height: "350px", width: "350px", borderRadius: "80px", marginBottom: "30px"}} alt="dog-gg"/>
                <Pagetitle title="Pick your spot and grab some tasty smoothies" />
                <Pagetitle title="Time to travel and gather sun energy" />
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
