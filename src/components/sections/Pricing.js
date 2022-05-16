import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Pricebox from "../elements/Pricebox";
import { Link } from "react-scroll";

const priceboxData = [
  {
    id: 1,
    title: "Web Development",
    icon: "images/reactjs.png",
    content: [
      {
        id: 0,
        text: "Reliable and Outstanding Websites, with the faster technologies and frameworks",
      },
    ],
    price: "Contact",
    best: false,
    badge: false,
  },
  {
    id: 2,
    title: "Unlocking Data Value",
    icon: "images/graphql.png",
    content: [
      {
        id: 1,
        text: "We unlock the value of data for your competitive advantage with GraphQL Techs and DBs",
      },
    ],
    price: "Contact",
    best: true,
    badge: "Recommended",
  },
  {
    id: 3,
    title: "Smart Contract",
    icon: "images/polygon.png",
    content: [
      { id: 1, text: "Focus on Ethereum and Polygon and We are available for other blockchains" },
    ],
    price: "Contact",
    best: false,
    badge: false,
  },
];

function Pricing() {
  return (
    <section id="section-services">
      <div className="container">
        <Pagetitle title="Main Plans" />
        <div className="row align-items-center">
          {priceboxData.map((pricebox) => (
            <div key={pricebox.id} className="col-md-4">
              <Pricebox priceboxItem={pricebox} />
            </div>
          ))}
        </div>
        <div className="mt-5 text-center">
          <h4 className="mb-0">
            Looking for a custom job?{" "}
            <Link
              className="colorpink pointer"
              to="section-contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              Click here
            </Link>{" "}
            to contact me! 👋
          </h4>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
