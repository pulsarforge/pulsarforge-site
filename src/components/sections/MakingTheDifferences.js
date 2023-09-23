import React from "react";
import Link from "next/link";
import Pagetitle from "../elements/Pagetitle";
import MakingTheDifference from "../elements/MakingTheDifference";
import MakingTheDifferenceJson from "../../data/making-the-differences.json";

function MakingTheDifferences() {
  const servicesData = MakingTheDifferenceJson;

  return (
    <section id="making-the-difference">
      <div
        className="page-title-center"
        style={{
          paddingLeft: "30px",
          paddingRight: "30px",
          marginTop: "100px",
        }}
      >
        <Link className="navigate-link" href="#passion-projects">
          <Pagetitle title="Making the Difference" />
        </Link>
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
