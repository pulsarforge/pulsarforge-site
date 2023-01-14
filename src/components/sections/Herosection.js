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
          <ul className="light list-inline mb-0 mt-4 icons-social">
            <li className="list-inline-item">
              <a href="https://discord.com/invite/PvRCtNeBVg" target="_blank" rel="noreferrer">
                <i className="fab fa-discord adjust-social-icons"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://github.com/pulsarforge" target="_blank" rel="noreferrer">
                <i className="fab fa-github adjust-social-icons"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://twitter.com/pulsarforge" target="_blank"rel="noreferrer">
                <i className="fab fa-twitter adjust-social-icons"></i>
              </a>
            </li>
          </ul>


          
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
