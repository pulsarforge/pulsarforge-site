import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

function Showcase({ portfolio }) {
  const { category, title, image, popupLink, link, description, text } = portfolio;
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
        <a
          href={link ? link : "!#"}
          className="work-image"
          onClick={handleLightbox}
          target="_blank"
          rel="noreferrer"
        >
          <div className="details">
            <span className="term text-capitalize">{category} / {title}</span>
          </div>
          <div className="thumb">
            <img className="zoom-image" src={image} alt="" />
            <h2>{description}</h2>
            <p>{text}</p>
          </div>
        </a>
      </div>
      {popupLink && <FsLightbox toggler={toggler} sources={popupLink} />}
    </>
  );
}

export default Showcase;
