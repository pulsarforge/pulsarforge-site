import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Pagetitle from "../elements/Pagetitle";

function Contact() {

  return (
    <section id="contact" >
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
                <h2>For collabs, business, products, and services related talk</h2>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                <h2>
                  
                  <a href="mailto:pulsarforgelabs@gmail.com">Let your message travel 👋</a> 
                </h2>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
