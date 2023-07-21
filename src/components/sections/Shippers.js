import React, { useState, useEffect } from "react";
import Link from "next/link";
import Pagetitle from "../elements/Pagetitle";
import Showcase from "../elements/Showcase";
import ShipperJson from "../../data/shippers.json";
import ShipperFiltersJson from "../../data/shippers-filters.json";
import ShipperInsiderJson from "../../data/shippers-insider.json";
import ShipperInsiderFiltersJson from "../../data/shippers-insider-filters.json";
import ShowcaseInsider from "../elements/ShowcaseInsider";

function Shippers() {
  const allData = ShipperJson;
  const filters = ShipperFiltersJson;
  const allInsiderData = ShipperInsiderJson;
  const insiderFilters = ShipperInsiderFiltersJson;

  return (
    <section id="passion-projects">
      <div
        className="page-title-center"
        style={{
          paddingLeft: "30px",
          paddingRight: "30px",
          marginTop: "100px",
        }}
      >
          <Link className="navigate-link" href="#vibes">
            <Pagetitle title="Platforms & Products = Passion Projects" />
          </Link>
                <h2
                  className= "text-capitalize current"
                  style={{ fontSize: 25 }}
                >
                  {insiderFilters.text}
                </h2>
                <div className="row portfolio-wrapper">
                  {allInsiderData.map((item) => (
                    <div className="col-md-4 col-sm-6 grid-item" key={item.id} style={{padding: 50}}>
                      <ShowcaseInsider portfolio={item} />
                    </div>
                  ))}
                </div>
                <h2
                  className= "text-capitalize current"
                  style={{ fontSize: 25 }}
                >
                  {filters.text}
                </h2>
        <div className="row portfolio-wrapper">
          {allData.map((item) => (
            <div className="col-md-4 col-sm-6 grid-item" key={item.id} style={{padding: 50}}>
              <Showcase portfolio={item} />
            </div>
          ))}
        </div>
        <div className="load-more text-center mt-4">
          <button
            className="btn btn-default"
          >
            Shipping code in progress 🥞🥞🥞🥞 wait for it
          </button>
        </div>
      </div>
    </section>
  );
}

export default Shippers;
