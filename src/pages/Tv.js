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
          <meta
            name="description"
            content="Making pancakes 🥞🥞🥞🥞"
          />
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
              <h4> Wen? </h4>
              <h6> Soon </h6>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Tv;
