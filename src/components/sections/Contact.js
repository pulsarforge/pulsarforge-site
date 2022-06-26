import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Pagetitle from "../elements/Pagetitle";

function Contact() {

  return (
    <section id="contact">
      <div className="container">
        <Pagetitle title="Get in touch" />

        <div className="row">
          <div className="col-md-10">
            <div className="contact-info">
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                <h3>Let's talk about Collabs and Business.</h3>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                <h2>
                  Send an{" "}
                  <a href="mailto:omgworkshopfire@gmail.com">email</a>. 👋
                </h2>
                <ul className="social-icons light list-inline mb-0 mt-4">
                  <li className="list-inline-item">
                    <a href="https://discord.com/invite/frYAsD2DjT" target="_blank" rel="noreferrer">
                      <i className="fab fa-discord adjust-social-icons"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://twitter.com/pulsarforge" target="_blank"rel="noreferrer">
                      <i className="fab fa-twitter adjust-social-icons"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://github.com/pulsarforge" target="_blank" rel="noreferrer">
                      <i className="fab fa-github adjust-social-icons"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.twitch.tv/pulsarforge" target="_blank" rel="noreferrer">
                      <i className="fab fa-twitch adjust-social-icons"></i>
                    </a>
                  </li>
                </ul>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
