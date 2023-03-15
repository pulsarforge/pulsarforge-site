import React from "react";
import { Link } from "react-router-dom";

function DevBlog({ blogData }) {
  const { id, category, title, description, author, image, filesource } = blogData;
  const getNospaceTitle = (filesource) => {
    let tempArr = filesource.split("/");
    let fileName = tempArr[tempArr.length - 1];
    let getName = fileName.slice(0, -3);
    return getName;
  };
  return (
    <>
      <div className="blog-item rounded bg-white shadow-dark">
        <div className="thumb">
          <a href={`dev-blog/${id}/${getNospaceTitle(filesource)}`}>
            <span className="category">{category}</span>
          </a>
          <Link to={`dev-blog/${id}/${getNospaceTitle(filesource)}`}>
            <img src={image} alt="blog-title" />
          </Link>
        </div>
        <div className="details">
          <h4 className="my-0 title">
            <Link
              to={`dev-blog/${id}/${getNospaceTitle(filesource)}`}
            >
              {title}
            </Link>
          </h4>
          <p>{description}</p>
          <ul className="list-inline meta mb-0 mt-2">
            <li className="list-inline-item">By: {author}</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default DevBlog;
