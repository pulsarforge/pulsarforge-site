import React from "react";

function Herosection(props) {

  return (
    <section
      id="home"
      className={
        props.light
          ? "home d-flex align-items-center light"
          : "home d-flex align-items-center"
      }
    >
      <div className="container">
        <div className="intro">
          <img src="images/logo.png" alt="PulsarForge" className="mb-4" style={{width: "70%"}}/>
          <h1 className="mb-2 mt-0">Web3 Labs</h1>
          <div className="text-center mt-4">
          <a href="https://discord.com/invite/4mXg6QSyY8" target="_blank" rel="noreferrer"> 
            <button
              className="btn btn-default"
            >
              Join us at discord Party
            </button>
          </a>
        </div>
        <div className="mt-4" style={{paddingBottom: "100px"}}>
              <h3>Playground by Pulsarforge</h3>
              <h4>Five years at the craft and adding skills along the path</h4>
              <h4>Exploring the world and scaling projects</h4>
          </div>
        </div>

        
      </div>
    </section>
  );
}

export default Herosection;
