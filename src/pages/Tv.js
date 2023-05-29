import React, { useState } from "react";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import Pagetitle from "../components/elements/Pagetitle";
import { Helmet, HelmetProvider } from "react-helmet-async";
import DeveloperVideos from "../components/sections/DeveloperVideos";

function Tv() {
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
          <title>Live Streaming 📺</title>
          <meta name="description" content="Making pancakes 🥞🥞🥞🥞"/>
        </Helmet>
      </HelmetProvider>
      <Header
        logoSource="/images/pulsarforge-logo-font.png"
        toggleMenu={toggleMenu}
        headerToggler={headerToggler}
      />
      <section>
        <div className="container">
          <div className="row blog-wrapper fix-spacing">
            <div className="page-title-center">
              <img  src="/images/dog-streaming.jpg" style={{ height: "450px", width: "450px", borderRadius: "80px", marginBottom: "30px"}} alt="dog-streaming"/>
              <Pagetitle title="Live Streaming" />
              <h2 style={{color: "#fff"}}>You will find developer streams & recorded videos</h2>
              <br/>
              <h2 style={{color: "#fff"}}>Areas</h2>
              <br/>
              <h2 style={{color: "#fff"}}>Interfaces, Coordination, Communities</h2>
              <h2 style={{color: "#fff"}}>Web3, AI, Rust, Javascript</h2>
              <br/>
              <br/>
              <h3 style={{color: "#fff"}}>Streaming</h3>    
              <div style={{position: "relative", paddingTop: "56.25%"}}>
                <iframe 
                  title="pulsarforge dance tutorials"
                  src={process.env.REACT_APP_CODE_STREAM}
                  style={{border: "none", position: "absolute", top: 0, left: 0, height: "100%", width: "100%"}} 
                  allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" 
                  allowFullScreen={true}
                  loop={true}
                >
                </iframe>
              </div>
              <br/>  
              <br/>         
                <DeveloperVideos/>
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

export default Tv;
