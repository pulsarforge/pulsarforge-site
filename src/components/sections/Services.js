import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Service from "../elements/Service";
import ServicesJson from "../../data/services.json";

function Services() {
  const servicesData = ServicesJson;

  return (
    <section id="cool-services">
      <div
        style={{
          paddingLeft: "30px",
          paddingRight: "30px",
          marginTop: "100px",
        }}
      >
        <a class="navigate-link" href="#dev-docs">
          <Pagetitle title="Making the difference" />
        </a>
        <div className="row align-items-center">
          {servicesData.map((servicebox) => (
            <div key={servicebox.id} className="col-md-4">
              <Service serviceboxItem={servicebox} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
