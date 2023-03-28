import React from "react";
import Pagetitle from "../elements/Pagetitle";
import MakingTheDifference from "../elements/MakingTheDifference";
import MakingTheDifferenceJson from "../../data/making-the-differences.json";

function MakingTheDifferences() {
  const servicesData = MakingTheDifferenceJson;

  return (
    <section id="cool-services">
      <div
        style={{
          paddingLeft: "30px",
          paddingRight: "30px",
          marginTop: "100px",
        }}
      >
        <a className="navigate-link" href="#dev-docs">
          <Pagetitle title="Making the difference" />
        </a>
        <div className="row align-items-center">
          {servicesData.map((servicebox) => (
            <div key={servicebox.id} className="col-md-4">
              <MakingTheDifference serviceboxItem={servicebox} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MakingTheDifferences;