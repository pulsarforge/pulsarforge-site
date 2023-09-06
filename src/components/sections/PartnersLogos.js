import React from "react";
import Pagetitle from "../elements/Pagetitle";
import BrandLogosJson from "../../data/brandlogos.json";

function Partnerslogos() {
  const brandlogoData = BrandLogosJson;

  return (
    <div id="branglogos">
      <div className="container">
        <Pagetitle title="Partners" />
        <div className="row">
          {brandlogoData.map((brandlogo) => (
            <div className="col-md-2 col-6" key={brandlogo.id}>
              <div className="partners-item">
                <div className="inner">
                  <Image src={brandlogo.image} width={120} height={120} alt="Partners" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Partnerslogos;
