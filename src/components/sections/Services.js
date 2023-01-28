import React from "react";
import Pagetitle from "../elements/Pagetitle";
import ServicesBox from "../elements/Service";
import ServicesJson from "../../data/services.json";

const servicesData = ServicesJson;

function Services() {
  return (
    <section id="section-services" >
      <div className="container">
        <Pagetitle title="Making the difference" />
        <div className="row align-items-center">
          {servicesData.map((pricebox) => (
            <div key={pricebox.id} className="col-md-4">
              <ServicesBox priceboxItem={pricebox} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
