import React from "react";
import Pagetitle from "../components/elements/Pagetitle";
import Header3 from "../components/layouts/Header3";
import Footer from "../components/layouts/Footer";
import { Helmet } from "react-helmet";
import AwesomeBounties from "../components/sections/AwesomeBounties";


function AwesomeXR() {

    return (
      <>
        <Helmet>
          <title>Awesome XR.</title>
          <meta name="description" content="Awesome XR, Use the resources and release you from 9 to 5 jobs or at least get an extra xp, Now you have the tools, up to you how to use them and solve the puzzle." />
        </Helmet>
        <Header3 logoSource="/images/PulsarForge-1.png" />
        <section id="awesome-x-r" style={{backgroundColor: "rgb(24, 24, 24)"}}>
          <div className="container">
            <div style={{marginTop: 40}}>
              <Pagetitle title="Awesome X_Name Resources" />
              <h3 style={{color: 'white'}}>A set of resources, to release you from 9 to 5 jobs or at least get an extra, xP.</h3>
              <h3 style={{color: 'white'}}>Now you have the tools, up to you how to use them and solve the puzzle.</h3>
              
            </div>{/* Start Portfolio Filters */}
            <AwesomeBounties />
          </div>
        </section>
        <Footer />
      </>
    );
  }

export default AwesomeXR;