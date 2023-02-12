import React from "react";
import Pagetitle from "../elements/Pagetitle";

function Contact() {

  return (
    <section id="contact" >
      <div className="container">
        <Pagetitle title="Get in touch" />
        <div className="row">
          <div className="col-md-10">
            <div className="contact-info">
              <h2>
                <a href="mailto:pulsarforgelabs@gmail.com">Let your message travel 📬</a>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
