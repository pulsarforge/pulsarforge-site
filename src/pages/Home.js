import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Element } from "react-scroll";
import Header from "../components/layouts/Header";
import Vibes from "../components/sections/Vibes";
import CodeGardens from "../components/sections/CodeGardens";
import Shippers from "../components/sections/Shippers";
import MakingTheDifferences from "../components/sections/MakingTheDifferences";
import DevDocs from "../components/sections/DevDocs";
import Footer from "../components/layouts/Footer";

function Home() {

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Pulsarforge Web3 Labs 🌴</title>
          <meta name="description" content="Web3 Labs. Code Garden. Playground. Community. Shipping Projects"/>
        </Helmet>
      </HelmetProvider>
      <Header logoSource="/images/pulsarforge-logo-font.png" />
      <main className="content-3">
        <Element name="vibes">
          <Vibes />
        </Element>
        <Element name="code-garden">
          <CodeGardens />
        </Element>
        <Element name="passion-projects">
          <Shippers />
        </Element>
        <Element name="making-the-difference">
          <MakingTheDifferences />
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
