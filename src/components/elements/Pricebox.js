import React from "react";

function Pricebox({ priceboxItem }) {
  const { icon, title, content, badge, best } = priceboxItem;
  return (
    <div
      className={
        best
          ? "price-item bg-white rounded shadow-dark text-center best"
          : "price-item bg-white rounded shadow-dark text-center"
      }
    >
      {badge && <span className="badge">{badge}</span>}
      { icon ? 
        <img src={icon} alt="Regular" style={{width: "70%"}}/> :
        <></>
      }
      <h2 className="plan">{title}</h2>
      {content.map((singleContent) => (
        <p key={singleContent.id}>{singleContent.text}</p>
      ))}
      <div className="mt-4">
        <h2 className="btn btn-default">
          <a href="mailto:omgworkshopfire@gmail.com" style={{fontSize: 20, color:"white", textDecoration: "none"}}>Get Started</a>
        </h2>
          </div>
    </div>
  );
}

export default Pricebox;
