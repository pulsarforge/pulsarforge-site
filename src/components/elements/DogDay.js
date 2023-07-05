import React from "react";
import { Link } from "react-router-dom";

function DogDay({ blogData }) {
  const { id, category, title, description, image, author, filesource } = blogData;
  const getNospaceTitle = (filesource) => {
    let tempArr = filesource.split("/");
    let fileName = tempArr[tempArr.length - 1];
    let getName = fileName.slice(0, -3);
    return getName;
  };
  return (
    <>
      <div className="blog-item rounded shadow-dark" style={{backgroundColor: "#fff"}}>
        <Link to={`/dog-days/${id}/${getNospaceTitle(filesource)}`}>
          <div className="thumb">
            <span className="category">{category}</span>
            <img src={image} alt="blog-title" />
          </div>
          <div className="details">
            <h4 className="my-0 title">
              {title}
            </h4>
            <p>{description}</p>
            <ul className="list-inline meta mb-0 mt-2">
              <li className="list-inline-item">By: {author}</li>
            </ul>
          </div>
        </Link>
      </div>
    </>
  );
}

export default DogDay;
