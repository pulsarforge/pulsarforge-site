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
      <div className="container" style={{ background: "url('/images/hero-background-v2.jpg')", backgroundRepeat: "no-repeat", height: "100%", width: "100%", padding: "0", minHeight: "100%"}}>
        <div className="intro">
          <img src="images/logo.png" alt="Pulsarforge" className="mb-4" style={{width: "100%", marginTop: 10}}/>
          <h1 className="mb-2 mt-0" style={{fontSize: 65, textShadow: "3px 3px 2px rgb(37, 37, 37)"}}>Web3 Labs</h1>

          <div className="mt-4">
              <h2 style={{fontSize: 40, textShadow: "3px 3px 2px rgb(37, 37, 37)"}}>Playground by Pulsarforge</h2>
              <h3 style={{fontSize: 20, textShadow: "3px 3px 2px rgb(37, 37, 37)"}}>Five years at the craft and adding skills along the path <br /> <br /> Exploring the world and scaling projects</h3>
          </div> 
          <div className="text-center mt-4" style={{marginBottom: 300, paddingTop: 10}}>
            <a href="https://discord.com/invite/4mXg6QSyY8" target="_blank" rel="noreferrer"> 
              <button className="btn btn-default" style={{fontSize: 25, textShadow: "3px 3px 2px rgb(37, 37, 37)"}}>Join us at discord</button>
            </a>
          </div>
        </div> 
      </div>
    </section>
  );
}

export default Herosection;
