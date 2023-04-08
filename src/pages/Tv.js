import React, { useState } from "react";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import Pagetitle from "../components/elements/Pagetitle";
import { Helmet, HelmetProvider } from "react-helmet-async";

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
              <img  src="/images/dog-streaming.jpg" style={{ height: "auto", width: "auto", borderRadius: "80px", marginBottom: "30px"}} alt="dog-streaming"/>
              <Pagetitle title="Live Streaming" />
              <h2 style={{color: "#fff"}}> Wen? 📺</h2> 
              <h2 style={{color: "#fff"}}>Soon 🚙</h2>
              <div style={{position: "relative", paddingTop: "56.25%"}}>
                <iframe 
                  title="pulsarforge tv"
                  src={process.env.REACT_APP_VIDEO_TREASURE}
                  style={{border: "none", position: "absolute", top: 0, left: 0, height: "100%", width: "100%"}} 
                  allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" 
                  allowFullScreen={true}
                  loop={true}
                >
                </iframe>
              </div>
              <h3 style={{color: "#fff"}}>Tokenomics backed by cheese standard 🧀🧀🧀🧀</h3>
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

export default Tv;
