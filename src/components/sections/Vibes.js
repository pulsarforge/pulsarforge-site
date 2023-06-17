import React from "react";
function Vibes() {


  return (
    <section
      id="vibes"
      className="home d-flex align-items-center"
    >
      <div
        style={{
          background: "url('/images/hero-background.png')",
          backgroundRepeat: "no-repeat",
          height: "100%",
          width: "100%",
          minHeight: "100%",
          backgroundSize: "100%",
        }}
      >
        <div className="intro-logo">
            <img
              src="images/logo.png"
              alt="Pulsarforge"
              style={{ width: "18%"}}
            />
        </div>
        <div className="intro">
          <a className="navigate-link" href="#code-gardens">
            <h1
              style={{
                fontSize: 75,
                color: "#fff",
                textShadow: "3px 3px 2px rgb(37, 37, 37)",
                fontFamily: "DogBrain",
              }}
            >
              Web3 Labs
            </h1>
          </a>
          <div>
            <h2
              style={{
                fontSize: 50,
                textShadow: "3px 3px 2px rgb(37, 37, 37)",
                color: "#fff",
              }}
            >
              Playground by Pulsarforge
            </h2>
            <h3
              style={{
                fontSize: 25,
                textShadow: "3px 3px 2px rgb(37, 37, 37)",
                marginTop: "25px",
                color: "#fff",
              }}
            >
              Areas: Interfaces, Coordination, Communities
              <br />
              <br />
            </h3>
          </div>
          <div
            className="text-center mt-4"
            style={{ marginBottom: 220, paddingTop: 25 }}
          ></div>
        </div>
      </div>
    </section>
  );
}

export default Vibes;
