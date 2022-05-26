import React, { useState, useEffect } from "react";
import Header3 from "../components/layouts/Header3";
import Blog from "../components/elements/Blog";
import Pagination from "../components/elements/Pagination";
import { Helmet } from "react-helmet";

const allBlogs = [
  {
    id: 1,
    title: "Montly Report April 2022",
    image: "images/blog/Flower-Camera.jpg",
    filesource: "../../blogs/monthly-report-april-2022.md",
    date: "25 April, 2022",
    author: "PulsarForge",
    category: "Montly Report",
  },
  {
    id: 2,
    title: "Voxelverse NFTs",
    image: "images/blog/V00001-The-Gathering-V1.png",
    filesource: "../../blogs/voxelverse.md",
    date: "30 April, 2022",
    author: "PulsarForge",
    category: "Metaverse",
  },
  {
    id: 3,
    title: "Estonia dream travel",
    image: "images/blog/Estonia.png",
    filesource: "../../blogs/estonia.md",
    date: "03 May, 2022",
    author: "PulsarForge",
    category: "Estonia",
  },
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
      <main>
        <div className="spacer" data-height="96"></div>
        <div className="blog-page-section">
          <div className="container">
            <div className="row blog-wrapper fix-spacing" style={{paddingTop: 170}}>
              {currentPosts.map((blogItem) => (
                <div className="col-md-4" key={blogItem.id}>
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
    </>
  );
}

export default Bloglist;
