import React from "react";
import ReactCursorPosition from "react-cursor-position";
import { Element } from "react-scroll";
import Header3 from "../components/layouts/Header3";
import Footer from "../components/layouts/Footer";
import Blogs from "../components/sections/Blogs";
import BrandlogosDark from "../components/sections/BrandlogosDark";
import Contact from "../components/sections/Contact";
import Herosection from "../components/sections/Herosection";
import Services from "../components/sections/Services";
import Works from "../components/sections/Works";
import { Helmet } from "react-helmet";

function Homepage3() {
  document.body.classList.add("dark");
  return (
    <>
      <Helmet>
        <title> PulsarForge. Web3 devs lab. Community. Software engineers.</title>
        <meta name="description" content="Developers working in a descentralized way in web3, coding multichain tools, unlocking data value with APIs REST and GraphQL, Fron-End Developments, and smart contracts. Streaming Civilizations Voxelverse NFTs. Joins us." />
      </Helmet>
      <Header3 logoSource="/images/PulsarForge-1.png" />
      <main className="content-3">
        <Element name="section-home">
          <ReactCursorPosition>
            <Herosection />
          </ReactCursorPosition>
        </Element>
        <Element name="section-works">
          <Works />
        </Element>
        <Element name="section-services">
          <Services />
        </Element>
        <Element name="section-brandlogos">
          <BrandlogosDark />
        </Element>
        <Element name="section-blogs">
          <Blogs />
        </Element>
        <Element name="section-contact">
          <Contact />
        </Element>
        <div className="spacer" data-height="96"></div>
      </main>
      <Footer />
    </>
  );
}

export default Homepage3;
