import React from "react";

function ServicesBox({ priceboxItem }) {
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
      <h2 className="plan" style={{fontSize: 25}}>{title}</h2>
      {content.map((singleContent) => (
        <p key={singleContent.id} style={{fontSize: 19}}>{singleContent.text}</p>
      ))}
    </div>
  );
}

export default ServicesBox;