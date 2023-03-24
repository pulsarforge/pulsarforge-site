import React from "react";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import Pagetitle from "../components/elements/Pagetitle";

function StrategicAction(props) {
  return (
    <>
      <Header logoSource="/images/pulsarforge-logo-font.png" />
      <section
        className={
          props.light
            ? "home d-flex align-items-center light"
            : "home d-flex align-items-center"
        }
      >
        <div className="container">
          <div className="row blog-wrapper fix-spacing">
            <div className="page-title-center">
              <img  src="/images/dog-streaming.jpg" style={{ height: "500px", width: "500px", borderRadius: "80px", marginBottom: "30px"}} alt="dog-streaming"/>
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

export default StrategicAction;
