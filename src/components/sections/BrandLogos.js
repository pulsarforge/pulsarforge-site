import React from "react";
import Pagetitle from "../elements/Pagetitle";
import BrandLogosJson from "../../data/brandlogos.json";

function BrandlogosDark() {
  const brandlogoData = BrandLogosJson;

  return (
    <div id="branglogos">
      <div className="container">
        <Pagetitle title="Main techs" />
        <div className="row">
          {brandlogoData.map((brandlogo) => (
            <div className="col-md-2 col-6" key={brandlogo.id}>
              <div className="client-item">
                <div className="inner">
                  <img src={brandlogo.image} alt="Techs" />
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
