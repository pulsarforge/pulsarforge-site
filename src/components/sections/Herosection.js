import React from "react";
import Typed from "react-typed";

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
        <div className="intro" style={{paddingTop: "150px"}}>
          <img src="images/logo.png" alt="PulsarForge" className="mb-4" style={{width: "80%", borderRadius: "100%"}}/>
          <h1 className="mb-2 mt-0">Web3 Labs</h1>
          <h2>
          We are {" "}
            <Typed
              strings={[
                "software engineers",
                "software engineers",
                "bounty hunters",
                "creating and exploring",
                "developing & scaling projects",
                "a welcoming community",
              ]}
              typeSpeed={90}
              backSpeed={40}
              attr="value"
              loop
            >
              <label value></label>
            </Typed>
          </h2>

          <ul className="social-icons light list-inline mb-0 mt-4" style={{paddingRight: 20}}>
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
            <li className="list-inline-item">
              <a href="https://www.twitch.tv/pulsarforge" target="_blank"rel="noreferrer">
                <i className="fab fa-twitch adjust-social-icons"></i>
              </a>
            </li>
          </ul>

          <div className="mt-4" style={{paddingBottom: "150px"}}>
          </div>
        </div>

        
      </div>
    </section>
  );
}

export default Herosection;
