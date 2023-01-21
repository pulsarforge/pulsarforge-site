import React, { useState } from "react";

function Herosection(props) {
  const [isOpened, setIsOpened] = useState(false);

  function toggle() {
    setIsOpened(wasOpened => !wasOpened);
  }

  return (
    <section id="home" className={   props.light     ? "home d-flex align-items-center light"     : "home d-flex align-items-center" }>
      <div style={{ background: "url('/images/hero-background-v3.png')", backgroundRepeat: "no-repeat", height: "100%", width: "100%", minHeight: "100%", backgroundSize: "100%"}} >
        <div className="intro-logo">
            <button onClick={toggle} style={{ background: "transparent", border: "none", fontSize: 0}} >
              <img src="images/logo.png" alt="Pulsarforge" style={{width: "40%"}}/>
            </button>
            { isOpened ? <img src="/images/energy-loop-v2.gif" alt="Energy" className="logo-back-energy"/> : <></>}
        </div>
        <div className="intro">
          <h1 style={{fontSize: 70, textShadow: "3px 3px 2px rgb(37, 37, 37)"}}>Web3 Labs</h1>
          <div>
              <h2 style={{fontSize: 45, textShadow: "3px 3px 2px rgb(37, 37, 37)"}}>Playground by Pulsarforge O. M. G.</h2>
              <h3 style={{fontSize: 25, textShadow: "3px 3px 2px rgb(37, 37, 37)"}}>Five years at the code craft & adding skills along the path<br /><br />Exploring the world and shipping projects</h3>
          </div> 
          <div className="text-center mt-4" style={{marginBottom: 170, paddingTop: 10}}>
            <a href="https://discord.com/invite/4mXg6QSyY8" target="_blank" rel="noreferrer"> 
              <button className="btn btn-default" style={{fontSize: 35, textShadow: "3px 3px 2px rgb(37, 37, 37)"}}>Join us at discord</button>
            </a>
            <h3 style={{fontSize: 25, textShadow: "3px 3px 2px rgb(37, 37, 37)"}}>Actions write the history</h3>
          </div>
        </div> 
      </div>
    </section>
  );
}

export default Herosection;
