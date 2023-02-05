import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Element } from "react-scroll";
import Header from "../components/layouts/Header";
import Herosection from "../components/sections/Herosection";
import CodeGarden from "../components/sections/CodeGarden";
import Works from "../components/sections/Works";
import Services from "../components/sections/Services";
import Contact from "../components/sections/Contact";
import Footer from "../components/layouts/Footer";

function Home() {
  document.body.classList.add("dark");
  
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Pulsarforge Web3 Labs</title>
          <meta name="description" content="Web3 Labs. Code Garden. Playground. Community. Shipping Projects" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://pulsarforge.io/logo.png" />
        </Helmet>
      </HelmetProvider>
      <Header logoSource="/images/pulsarforge-logo-font.png" />
      <main className="content-3">
        <Element name="section-home">
          <Herosection />
        </Element>
        <Element name="section-code-garden">
          <CodeGarden />
        </Element>
        <Element name="section-works">
          <Works />
        </Element>
        <Element name="section-services">
          <Services />
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

export default Home;
