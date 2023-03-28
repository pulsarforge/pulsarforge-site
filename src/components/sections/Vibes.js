import React, { useState } from "react";

function Vibes() {
  const [isOpened, setIsOpened] = useState(false);

  function toggle() {
    setIsOpened((wasOpened) => !wasOpened);
  }

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
          <button
            onClick={toggle}
            style={{ background: "transparent", border: "none", fontSize: 0 }}
          >
            <img
              src="images/logo.png"
              alt="Pulsarforge"
              style={{ width: "40%" }}
            />
          </button>
          {isOpened ? (
            <img
              src="/images/energy-loop.gif"
              alt="Energy"
              className="logo-back-energy"
            />
          ) : (
            <></>
          )}
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
              }}
            >
              Playground by Pulsarforge
            </h2>
            <h3
              style={{
                fontSize: 25,
                textShadow: "3px 3px 2px rgb(37, 37, 37)",
                marginTop: "25px"
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
