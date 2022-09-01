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
  },
  {
    id: 4,
    image: "images/flow.png",
  }
];

function BrandlogosDarkNFTs() {
  return (
    <div id="branglogos">
      <div className="container">
        <Pagetitle title="Leveraging MultiChain, in Phases" />
        <div className="row">
          {brandlogoData.map((brandlogo) => (
            <div className="col-md-2 col-6" key={brandlogo.id} style={{width: "20%", margin: "auto"}}>
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
