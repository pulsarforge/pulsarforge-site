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
          <h1 className="mb-2 mt-0" style={{fontSize: 70}}>Web3 Labs</h1>
          <div className="text-center mt-4">
          <a href="https://discord.com/invite/4mXg6QSyY8" target="_blank" rel="noreferrer"> 
            <button
              className="btn btn-default" style={{fontSize: 25}}
            >
              Join us at discord
            </button>
          </a>
        </div>
        <div className="mt-4" style={{paddingBottom: "100px"}}>
              <h2 style={{fontSize: 35}}>Playground by Pulsarforge</h2>
              <h3 style={{fontSize: 20}}>Five years at the craft and adding skills along the path <br /> <br /> Exploring the world and scaling projects</h3>
          </div>
        </div>

        
      </div>
    </section>
  );
}

export default Herosection;
