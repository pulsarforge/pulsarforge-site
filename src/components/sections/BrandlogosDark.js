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
    image: "images/polygon.png",
  },
  {
    id: 6,
    image: "images/solana.png",
  },
  {
    id: 7,
    image: "images/timescale.png",
  },
  {
    id: 8,
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
            <div className="col-md-3 col-6" key={brandlogo.id} style={{width: "12.5%", height: 100}}>
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
