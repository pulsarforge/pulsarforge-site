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
                <h3>
                  Let your message{" "}
                  <a href="mailto:omgworkshopfire@gmail.com">email travel</a>. 👋
                </h3>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
