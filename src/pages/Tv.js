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
          <title>TV 📺</title>
          <meta name="description" content="Making pancakes 🥞🥞🥞🥞"/>
        </Helmet>
      </HelmetProvider>
      <Header
        logoSource="/images/logo.png"
        toggleMenu={toggleMenu}
        headerToggler={headerToggler}
      />
      <section>
        <div className="container">
          <div className="row blog-wrapper fix-spacing">
            <div className="page-title-center">
              <img  src="/images/summer-dog.jpg" style={{ height: "auto", width: "500px", borderRadius: "80px", marginBottom: "30px"}} alt="dog-streaming"/>
              <Pagetitle title="TV" />
              <h2 style={{color: "#fff"}}>You will find developer videos about:</h2>
              <h2 style={{color: "#fff"}}>Interfaces, Coordination, Communities</h2>
              <h2 style={{color: "#fff"}}>Web3, AI, Rust, Reactjs</h2>
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
