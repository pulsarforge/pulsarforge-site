import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

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
          <img src="images/PulsarForge.png" alt="PulsarForge" className="mb-4" style={{width: 300, paddingTop: 100}}/>

          <h1 className="mb-2 mt-0">PulsarForge</h1>
          <h2>
          Oliver DMG {" "}
            <Typed
              strings={[
                "Senior Software Engineer ",
                "Senior Software Engineer",
                "Bounty Hunter",
                "Digital Creator",
              ]}
              typeSpeed={80}
              backSpeed={40}
              attr="value"
              loop
            >
              <label value></label>
            </Typed>
          </h2>

          <ul className="social-icons light list-inline mb-0 mt-4">
            <li className="list-inline-item">
              <a href="https://discord.com/invite/frYAsD2DjT" target="_blank" rel="noreferrer">
                <i className="fab fa-discord"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://twitter.com/pulsarforge" target="_blank"rel="noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://github.com/pulsarforge" target="_blank" rel="noreferrer">
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.twitch.tv/pulsarforge" target="_blank" rel="noreferrer">
                <i className="fab fa-twitch"></i>
              </a>
            </li>
          </ul>

          <div className="mt-4">
            <Link
              className="btn btn-default"
              to="section-contact"
              spy={true}
              smooth={true}
              duration={9000}
            >
              Hire me / us
            </Link>
          </div>
        </div>

        
      </div>
    </section>
  );
}

export default Herosection;
