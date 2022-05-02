import React from "react";

function Pricebox({ priceboxItem }) {
  const { icon, title, content, price, badge, best } = priceboxItem;
  return (
    <div
      className={
        best
          ? "price-item bg-white rounded shadow-dark text-center best"
          : "price-item bg-white rounded shadow-dark text-center"
      }
    >
      {badge && <span className="badge">{badge}</span>}
      <img src={icon} alt="Regular" />
      <h2 className="plan">{title}</h2>
      {content.map((singleContent) => (
        <p key={singleContent.id}>{singleContent.text}</p>
      ))}
      <h3 className="price">
        <em>$</em>
        {price}
      </h3>
      <div className="mt-4">
        <h2 className="btn btn-default">
          <a href="mailto:servicios@inursites.com" style={{fontSize: 25, color:"white", textDecoration: "none"}}>Get Started</a>
        </h2>
          </div>
    </div>
  );
}

export default Pricebox;
