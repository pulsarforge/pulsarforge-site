import React from "react";
import Pagetitle from "../elements/Pagetitle";

const brandlogoData = [
  {
    id: 1,
    image: "images/reactjs.png",
  },
  {
    id: 2,
    image: "images/graphql.png",
  },
  {
    id: 3,
    image: "images/thegraph.png",
  },
  {
    id: 4,
    image: "images/ethereum.png",
  },
  {
    id: 5,
    image: "images/timescale.png",
  },
  {
    id: 6,
    image: "images/aws.png",
  },
];

function BrandlogosDark() {
  return (
    <div id="branglogos">
      <div className="container">
        <Pagetitle title="Techs" />
        <div className="row">
          {brandlogoData.map((brandlogo) => (
            <div className="col-md-2 col-6" key={brandlogo.id} style={{width: "16%", height: 100}}>
              <div className="client-item">
                <div className="inner">
                  <img src={brandlogo.image} alt="client-name" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BrandlogosDark;
