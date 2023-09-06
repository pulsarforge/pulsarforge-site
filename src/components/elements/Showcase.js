import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Showcase({ portfolio }) {
  const { category, title, image, link, description, text } = portfolio;
  const [toggler, setToggler] = useState(false);

  const handleLightbox = (e) => {
    if (!link) {
      e.preventDefault();
      setToggler(!toggler);
    }
  };

  return (
    <>
      <div className="portfolio-item rounded shadow-dark">
          <Link
          href={link ? link : "!#"}
          className="work-image"
          onClick={handleLightbox}
        >
          <div className="details">
            <span className="term text-capitalize">{category} / {title}</span>
          </div>
          <div className="thumb">
            <Image className="zoom-image" src={image} alt="" width={750} height={750} />
            <h2>{description}</h2>
            <p>{text}</p>
          </div>
        </ Link>
      </div>
    </>
  );
}

export default Showcase;
