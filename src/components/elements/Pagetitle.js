import React from "react";

function Pagetitle({ title }) {
  return (
    <>
      <h5 className="section-title" style={{color: "#fff"}}>{title}</h5>
      <div className="spacer" data-height="60"></div>
    </>
  );
}

export default Pagetitle;
