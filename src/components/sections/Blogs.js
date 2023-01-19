import React from "react";
import { Link } from "react-router-dom";
import Blog from "../elements/Blog";
import Pagetitle from "../elements/Pagetitle";

const allBlogs = [
  {
    id: 1,
    title: "Civilizations Voxelverse",
    image: "images/blog/The_Gathering_V1.png",
    filesource: "../../blogs/civilizations-voxelverse.md",
    date: "30 April, 2022",
    author: "PulsarForge",
    category: "Metaverse",
  },
  {
    id: 2,
    title: "Cryptoracle analytics dAPP",
    image: "images/blog/cryptoracle.png",
    filesource: "../../blogs/cryptoracle-analytics-dapp.md",
    date: "25 April, 2022",
    author: "PulsarForge",
    category: "Cryptoracle",
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
  },
  {
    id: 5,
    title: "Dumb Ideas with Potential",
    image: "images/blog/dumb-ideas-with-potential-v1.jpg",
    filesource: "../../blogs/dumb-ideas-with-potential-v1.md",
    date: "19 January, 2023",
    author: "PulsarForge",
    category: "Experiments - 👏👏👏",
  },
];

function Blogs() {
  return (
    <section id="blog">
      <div className="container" style={{marginTop: "200px"}}>
        <Pagetitle title="Latest posts" />
        <div className="row blog-wrapper">
          {allBlogs.map((blogItem) => (
            <div className="col-md-3" key={blogItem.id}>
              <Blog blogData={blogItem} />
            </div>
          ))}
        </div>
        <div className="text-center" style={{marginBottom: "100px"}}>
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
