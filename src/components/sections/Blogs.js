import React from "react";
import { Link } from "react-router-dom";
import Blog from "../elements/Blog";
import Pagetitle from "../elements/Pagetitle";

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
    image: "images/blog/The_Gathering_V1.png",
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

function Blogs() {
  return (
    <section id="blog">
      <div className="container" style={{marginTop: "200px"}}>
        <Pagetitle title="Latest posts" />
        <div className="row blog-wrapper">
          {allBlogs.map((blogItem) => (
            <div className="col-md-4" key={blogItem.id}>
              <Blog blogData={blogItem} />
            </div>
          ))}
        </div>
        <div className="text-center">
          <div className="spacer" data-height="30"></div>
          <Link to="/blogs" className="btn btn-default">
            Show all blogs
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Blogs;
