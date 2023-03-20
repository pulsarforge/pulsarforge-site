import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Element } from "react-scroll";
import Header from "../components/layouts/Header";
import Herosection from "../components/sections/Herosection";
import CodeGardens from "../components/sections/CodeGardens";
import Services from "../components/sections/Services";
import Footer from "../components/layouts/Footer";
import Works from "../components/sections/Works";
import DevDocs from "../components/sections/DevDocs";

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
        <Element name="home">
          <Herosection />
        </Element>
        <Element name="code-garden">
          <CodeGardens />
        </Element>
        <Element name="passion-projects">
          <Works />
        </Element>
        <Element name="cool-services">
          <Services />
        </Element>
        <Element name="dev-blog">
          <DevDocs />
        </Element>
        <div className="spacer" data-height="96"></div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
