import React from "react";
import Link from 'next/link';
import Image from "next/image";

function DogDays({ blogData }) {
  const { category, title, description, image, author, filesource } = blogData;
  return (
    <>
      <div className="blog-item rounded shadow-dark" style={{backgroundColor: "#fff"}}>
        <Link href={filesource}>
          <div className="thumb">
            <span className="category">{category}</span>
            <Image src={image} alt="blog-title" width={360} height={360}/>
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

export default DogDays;
