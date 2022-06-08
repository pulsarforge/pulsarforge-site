import React from "react";
import Pagetitle from "../elements/Pagetitle";

const brandlogoData = [
  {
    id: 1,
    image: "images/near.png",
  },
  {
    id: 2,
    image: "images/polygon.png",
  },
  {
    id: 3,
    image: "images/solana.png",
  }
];

function BrandlogosDarkNFTs() {
  return (
    <div id="branglogos">
      <div className="container">
        <Pagetitle title="MultiChain" />
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

export default BrandlogosDarkNFTs;
