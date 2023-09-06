import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function ShowcaseInsider({ portfolio }) {
  const { category, title, image, link, description, text } = portfolio;


  return (
    <>
      <div className="portfolio-item rounded shadow-dark" style={{color: "white"}}>
          <Link
          href={link}
          className="work-image"
        >
          <div className="details">
            <span className="term text-capitalize">{category} / {title}</span>
          </div>
          <div className="thumb">
            <Image className="zoom-image" src={image} alt="" width={360} height={360}/>
            <h2>{description}</h2>
            <p>{text}</p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default ShowcaseInsider;
