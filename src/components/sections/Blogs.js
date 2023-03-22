import React from "react";
import { Link } from "react-router-dom";
import Pagetitle from "../elements/Pagetitle";
import Blog from "../elements/Blog";
import BlogJson from "../../data/blog.json";

function Blogs() {
  const allBlogs = BlogJson;

  return (
    <section id="blog">
      <div className="container blog-container">
        <Pagetitle title="Latest posts" />
        <div className="row blog-wrapper">
          {allBlogs.map((blogItem) => (
            <div className="col-md-3" key={blogItem.id}>
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
