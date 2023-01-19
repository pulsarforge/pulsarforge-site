import React from "react";
import Pagetitle from "../elements/Pagetitle";
import ServicesBox from "../elements/ServicesBox";

const priceboxData = [
  {
    id: 1,
    title: "User Experience Consulting",
    content: [
      {
        id: 1,
        text: "I will craft a guide, a set of steps, to enhance your existing project and make it user friendly, engaging, an enjoyable experience",
      },
    ],
    price: "Contact",
    best: false,
    badge: false,
  },
  {
    id: 2,
    title: "React Web Development",
    icon: "images/reactjs.png",
    content: [
      {
        id: 0,
        text: "Reliable and outstanding websites, connecting with the users while reflecting the essence of your project and its culture",
      },
    ],
    price: "Contact",
    best: true,
    badge: "Recommended",
  },
  {
    id: 3,
    title: "Integrations",
    content: [
      { id: 1, text: "APIs REST Swagger or GraphQL. Databases as PostgreSQL or MongoDB. Payments, Wallets, and Smart Contracts at EVM" },
    ],
    price: "Contact",
    best: false,
    badge: false,
  },
];

function Services() {
  return (
    <section id="section-services" style={{margin: 200}}>
      <div className="container">
        <Pagetitle title="Main Services" />
        <div className="row align-items-center">
          {priceboxData.map((pricebox) => (
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
