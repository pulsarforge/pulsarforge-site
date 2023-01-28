import React from "react";

function Service({ serviceboxItem }) {
  const { icon, title, content, badge, best, cta } = serviceboxItem;
  return (
    <div
      className={
        best
          ? "service-item bg-white rounded shadow-dark text-center best"
          : "service-item bg-white rounded shadow-dark text-center"
      }
    >
      {badge && <span className="badge">{badge}</span>}
      { icon ? 
        <img src={icon} alt="Regular"/> :
        <></>
      }
      <h2 className="plan">{title}</h2>
      {content.map((singleContent) => (
        <p className="service-p" key={singleContent.id} >{singleContent.text}</p>
      ))}
        <div className="mt-4"></div>
        <h2 className="btn btn-default">
          <a className="service-cta" href="mailto:pulsarforgelabs@gmail.com">{cta}</a>
        </h2>
    </div>
  );
}

export default Service;
