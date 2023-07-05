import React, { useState } from "react";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import Pagetitle from "../components/elements/Pagetitle";
import { Helmet, HelmetProvider } from "react-helmet-async";
import DeveloperVideos from "../components/sections/DeveloperVideos";
import MakingTheDifference from "../components/sections/MakingTheDifferences";
import DevDocs from "../components/sections/DevDocs";

function Skills() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const headerToggler = (e) => {
    e.preventDefault();
    setToggleMenu(!toggleMenu);
  };

  document.addEventListener("click", function (e) {
    if (e.target.closest(".content")) {
      setToggleMenu(false);
    }
  });

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Skills Level Up 🎯</title>
          <meta name="description" content="Developer Skills, channel, services, and docs"/>
        </Helmet>
      </HelmetProvider>
      <Header
        logoSource="/images/logo.png"
        toggleMenu={toggleMenu}
        headerToggler={headerToggler}
      />
      <section>
        <div className="container">
          <div className="row blog-wrapper fix-spacing" >
            <div className="page-title-center" style={{background: "url('/images/river-otter-1080.jpg')", borderRadius: 60}}>
              <br />
              <br/>   
              <br/>
              <br/> 
              <br/>
              <br/> 
              <br/>
              <br/> 
              <br/>
              <br/> 
              <br/>
              <br/> 
              <br/>
              <br/> 
              <br/>
              <br/>  
              <br/>
              <br/> 
              <br/>
              <br/>  
              <Pagetitle title="You have found the Treasures" />
              <Pagetitle title="Developer Videos, Services, and Docs" />
              <br/>
              <br/> 
              <br/>
              <br/> 
              <br/>
              <br/> 
              <br/>
              <br/>
            </div>
            <div className="page-title-center">        
                <DeveloperVideos/>
            </div>
            <div className="page-title-center">        
                <MakingTheDifference />
            </div>
            <div className="page-title-center">        
                <DevDocs />
                <br/>
                <br/>   
                <br/>
                <br/>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Skills;
