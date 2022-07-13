import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

function OpenSource({ portfolio }) {
  const { category, title, description, stars, forks, contributors, image, popupLink, link } = portfolio;
  const [toggler, setToggler] = useState(false);

  const handleLightbox = (e) => {
    if (!link) {
      e.preventDefault();
      setToggler(!toggler);
    }
  };

  const handleIcon = () => {
    if (link) {
      return <i className="icon-link"></i>;
    } else if (popupLink) {
      if (popupLink.length > 1) {
        if (popupLink.toString().match(/youtube/g)) {
          return <i className="icon-camrecorder"></i>;
        }
        return <i className="icon-picture"></i>;
      } else if (popupLink.toString().match(/youtube/g)) {
        return <i className="icon-camrecorder"></i>;
      } else {
        return <i className="icon-magnifier-add"></i>;
      }
    }
    return <i className="icon-magnifier-add"></i>;
  };
  return (
    <>
      <a
        href={link ? link : "!#"}
        className="work-image"
        onClick={handleLightbox}
      >
        <div className="portfolio-item rounded shadow-dark">
          <div className="details">
            <span className="term text-capitalize">{category}</span>
            <h4 className="title">{title}</h4>
            <span className="more-button">{handleIcon()}</span>
          </div>
          <div className="thumb" style={{textAlign:"center"}}>
            <img src={image} alt="Portfolio-title"/>
            <div className="mask"></div>
          </div>
          <div>
            <h4 className="title" style={{textAlign:"center"}}>{title}</h4>
            <h6 className="title" style={{textAlign:"center"}}>{description}</h6>
            <h6 className="title" style={{textAlign:"center"}}>{stars} {forks} {contributors}</h6>
          </div>
        </div>
      </a>
      {popupLink && <FsLightbox toggler={toggler} sources={popupLink} />}
    </>
  );
}

export default OpenSource;
