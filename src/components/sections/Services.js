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
    cta: "Level up your game",
    best: false,
    badge: false,
  },
  {
    id: 2,
    title: "Reactjs Web Development",
    icon: "images/reactjs.png",
    content: [
      {
        id: 0,
        text: "Reliable and outstanding websites, connecting with the users while reflecting the essence of your project and its culture",
      },
    ],
    cta: "Get ahead your brand",
    best: true,
    badge: "Getting into action",
  },
  {
    id: 3,
    title: "Extensibility and Integrations",
    content: [
      { id: 1, text: "Deployments CI/CD, APIs REST, GraphQL, Databases PostgreSQL, MongoDB, Payments, Wallets, Smart Contracts at EVM" },
    ],
    cta: "Scale your project",
    best: false,
    badge: false,
  },
];

function Services() {
  return (
    <section id="section-services" >
      <div className="container">
        <Pagetitle title="Making the difference" />
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
