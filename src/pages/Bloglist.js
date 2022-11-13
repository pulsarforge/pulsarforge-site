import React, { useState, useEffect } from "react";
import Header3 from "../components/layouts/Header3";
import Blog from "../components/elements/Blog";
import Pagination from "../components/elements/Pagination";
import { Helmet } from "react-helmet";
import Footer from "../components/layouts/Footer";

const allBlogs = [
  {
    id: 1,
    title: "Cryptoracle analytics dAPP",
    image: "images/blog/blockversekitv1.png",
    filesource: "../../blogs/cryptoracle-analytics-dapp.md",
    date: "25 April, 2022",
    author: "PulsarForge",
    category: "Cryptoracle",
  },
  {
    id: 2,
    title: "Civilizations Voxelverse",
    image: "images/blog/The_Gathering_V1.png",
    filesource: "../../blogs/civilizations-voxelverse.md",
    date: "30 April, 2022",
    author: "PulsarForge",
    category: "Metaverse",
  },
  {
    id: 3,
    title: "Estonia dream travel",
    image: "images/blog/Estonia.png",
    filesource: "../../blogs/estonia-dream-travel.md",
    date: "03 May, 2022",
    author: "PulsarForge",
    category: "Estonia",
  },
  {
    id: 4,
    title: "DAO onboarding process, guide, smooth as silk",
    image: "images/blog/dao-onboarding.jpg",
    filesource: "../../blogs/dao-onboarding-process-guide-smooth-as-silk.md",
    date: "08 September, 2022",
    author: "PulsarForge",
    category: "DAOs",
  }
];

function Bloglist() {
  // document.body.classList.add("dark");
  //Uncomment the above line if you use dark version

  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

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
        <title>Blog, Software Engineer team, Showcasing Developments, Web3, Metaverse.</title>
        <meta name="description" content="Key updates on developments, about Software Engineering, Web3, Metaverse, showcase place for the developer team, coding internal tools and case studies of clients" />
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
            <div className="row blog-wrapper fix-spacing" style={{paddingTop: 170}}>
              {currentPosts.map((blogItem) => (
                <div className="col-md-3" key={blogItem.id}>
                  <Blog blogData={blogItem} />
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

export default Bloglist;
