import React from "react";

function Pagetitle({ title }) {
  return (
    <>
      <h2 className="section-title" style={{fontSize: 44, color: "#fff", textShadow: "3px 3px 2px rgb(37, 37, 37)", fontFamily: "DogBrain"}}>{title}</h2>
      <div className="spacer" data-height="60"></div>
    </>
  );
}

export default Pagetitle;
