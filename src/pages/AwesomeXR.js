import React from "react";
import Pagetitle from "../components/elements/Pagetitle";
import Header3 from "../components/layouts/Header3";
import Footer from "../components/layouts/Footer";
import { Helmet } from "react-helmet";
import AwesomeWeb3 from "../components/sections/AwesomeWeb3";


function AwesomeXR() {

    return (
      <>
        <Helmet>
          <title>Awesome XR.</title>
          <meta name="description" content="Awesome XR, Use the resources to skyrocket yourself and your team at all levels, Now you have the tools, up to you how to use them and solve the puzzle." />
        </Helmet>
        <Header3 logoSource="/images/PulsarForge-1.png" />
        <section id="awesome-x-r" style={{backgroundColor: "rgb(24, 24, 24)"}}>
          <div className="container">
            <div style={{marginTop: 40}}>
              <Pagetitle title="Awesome X_Name Resources" />
              <h3 style={{color: 'white'}}>Use the resources to skyrocket yourself and your team at all levels.</h3>
              <h3 style={{color: 'white'}}>Now you have the tools, up to you how to use them and solve the puzzle.</h3>
              
            </div>{/* Start Portfolio Filters */}
            <AwesomeWeb3 />
          </div>
        </section>
        <Footer />
      </>
    );
  }

export default AwesomeXR;