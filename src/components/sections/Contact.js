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
                <h3>For collabs, business and products related talk</h3>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                <h3>
                  Let your message: {" "}
                  <a href="mailto:pulsarforgelabs@gmail.com">Travel</a> 👋
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
