import React, { useState, useEffect } from "react";
import Header3 from "../components/layouts/Header3";
import Blog from "../components/elements/Blog";
import Pagination from "../components/elements/Pagination";
import { Helmet } from "react-helmet";
import Footer from "../components/layouts/Footer";

const allBlogs = [
  {
    id: 1,
    title: "Civilizations Voxelverse",
    image: "images/blog/The_Gathering_V1.jpg",
    filesource: "../../blogs/civilizations-voxelverse.md",
    date: "18 February, 2022",
    author: "Pulsarforge",
    category: "Metaverse - 😎",
  },
  {
    id: 2,
    title: "Cryptoracle analytics Dapp",
    image: "images/blog/cryptoracle.png",
    filesource: "../../blogs/cryptoracle-analytics-dapp.md",
    date: "25 April, 2022",
    author: "Pulsarforge",
    category: "Cryptoracle - 📈",
  },
  {
    id: 3,
    title: "Estonia dream travel",
    image: "images/blog/Estonia.jpg",
    filesource: "../../blogs/estonia-dream-travel.md",
    date: "03 May, 2022",
    author: "Pulsarforge",
    category: "Estonia - 🦄",
  },
  {
    id: 4,
    title: "DAO onboarding process, guide, smooth as silk",
    image: "images/blog/dao-onboarding.jpg",
    filesource: "../../blogs/dao-onboarding-process-guide-smooth-as-silk.md",
    date: "08 September, 2022",
    author: "Pulsarforge",
    category: "DAOs - 🔮",
  },
  {
    id: 5,
    title: "Dumb ideas with potential V1",
    image: "images/blog/dumb-ideas-with-potential-v1.jpg",
    filesource: "../../blogs/dumb-ideas-with-potential-v1.md",
    date: "19 January, 2023",
    author: "Pulsarforge",
    category: "Code Labs - 💻",
  },
];

function Bloglist() {
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
        <title>Blog of Software Engineering, Web3, UX, and Beyond</title>
        <meta name="description" content="Writing for fun about, dev, web3, projects, user experience and more" />
      </Helmet>
      <Header3
        logoSource="/images/PulsarForge-1.png"
        toggleMenu={toggleMenu}
        headerToggler={headerToggler}
      />
      <main style={{backgroundColor: "rgb(24, 24, 24)"}}>
        <div className="spacer" data-height="96"></div>
        <div className="blog-page-section" style={{backgroundColor: "rgb(24, 24, 24)", margin: 100}}>
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
