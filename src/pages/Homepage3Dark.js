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
import Pagetitle from "../components/elements/Pagetitle";

function Homepage3() {
  document.body.classList.add("dark");
  return (
    <>
      <Helmet>
        <title> PulsarForge. Web3 Devs Labs. Community. Software engineers.</title>
        <meta name="description" content="Web3 Labs, Developers at web3, coding multichain tools, open source labs, unlocking data value with APIs graphql, front-end react, and smart contracts. Community. Joins us." />
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
        <Element name="section-services" style={{marginBottom: '50px'}}>
          <Services />
        </Element>
        <Element name="section-brandlogos">
          <BrandlogosDark />
        </Element>
        <Element name="section-blogs">
          <Blogs />
        </Element>
        <Element name="section-newsletter">
          <div className="container">
            <Pagetitle title="Newsletter" />
            <iframe src="https://pulsarforge.substack.com/embed" width="70%" height="300px" title="Newsletter Blocks Labs" style={{border:"1px solid #EEE", background:"white", margin:"auto", display:"block", borderRadius:"25px",}}></iframe>
          </div>
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
