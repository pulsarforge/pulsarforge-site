import React, { useState, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "../components/layouts/Header";
import DogDay from "../components/elements/DogDay";
import Pagetitle from "../components/elements/Pagetitle";
import Pagination from "../components/elements/Pagination";
import DogBlogJson from "../data/dog-blogs.json";
import DogQuotesJson from "../data/dog-quotes.json";
import Footer from "../components/layouts/Footer";

function DogDays() {
  const allBlogs = DogBlogJson;
  const allQuotes = DogQuotesJson;
  const [posts, setPosts] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [postsPerPage] = useState(4);

  useEffect(() => {
    setPosts(allBlogs);
  }, [allBlogs]);
  
  useEffect(() => {
    setQuotes(allQuotes);
  }, [allQuotes]);

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

  const handleQuoteClick = () => {
    setCurrentQuoteIndex((currentIndex) => (currentIndex + 1) % quotes.length);
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Personal Dog Blog ✍🏽</title>
          <meta name="description" content="Writing for fun" />
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
                <div onClick={handleQuoteClick}>
                  <img  src="/images/dog-blog-we-are-early.jpg" style={{ height: "auto", width: "auto", borderRadius: "80px", marginBottom: "30px"}} alt="dog-streaming"/>
                  <p style={{fontSize: "22px"}}>{quotes[currentQuoteIndex]}</p>
                </div>
                <Pagetitle title="Personal Dog Blog" />
              </div>
              {currentPosts.map((blogItem) => (
                <div className="col-md-3" key={blogItem.id}>
                  <DogDay blogData={blogItem} />
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

export default DogDays;
