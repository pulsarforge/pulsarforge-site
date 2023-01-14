import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Pricebox from "../elements/Pricebox";

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
        text: "Reliable and outstanding websites, that connects with the users while reflecting the essence of your project and its culture",
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
      { id: 1, text: "APIs REST / Swagger or GraphQL && Databases as PostgreSQL or MongoDB && Wallets && Smart Contracts specially in EVM" },
    ],
    price: "Contact",
    best: false,
    badge: false,
  },
];

function Services() {
  return (
    <section id="section-services">
      <div className="container">
        <Pagetitle title="Main Services" />
        <div className="row align-items-center">
          {priceboxData.map((pricebox) => (
            <div key={pricebox.id} className="col-md-4">
              <Pricebox priceboxItem={pricebox} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
