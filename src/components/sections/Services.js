import React from "react";
import Pagetitle from "../elements/Pagetitle";
import ServicesBox from "../elements/Service";
import ServicesJson from "../../data/services.json";

function Services() {
  const servicesData = ServicesJson;

  return (
    <section id="section-services" >
      <div className="container">
        <Pagetitle title="Making the difference" />
        <div className="row align-items-center">
          {servicesData.map((servicebox) => (
            <div key={servicebox.id} className="col-md-4">
              <ServicesBox serviceboxItem={servicebox} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
