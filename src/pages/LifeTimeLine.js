import React from "react";
import Pagetitle from "../components/elements/Pagetitle";
import Timeline from "../components/elements/Timeline";
import Footer from "../components/layouts/Footer";
import Header3 from "../components/layouts/Header3";

const educationData = [
  {
    id: 1,
    title: "In Progress",
    content:
      "To Expanse",
  },
  {
    id: 2,
    title: "In Progress",
    content:
      "To Expanse",
  },  
  {
    id: 3,
    title: "In Progress",
    content:
      "To Expanse",
  },
  {
    id: 4,
    title: "In Progress",
    content:
      "To Expanse",
  },
  {
    id: 5,
    title: "In Progress",
    content:
      "To Expanse",
  },
  {
    id: 6,
    title: "In Progress",
    content:
      "To Expanse",
  },
  {
    id: 7,
    title: "In Progress",
    content:
      "To Expanse",
  }
  
];

const experienceData = [
  {
    id: 1,
    title: "In Progress",
    content:
      "To Expanse",
  },
  {
    id: 2,
    title: "In Progress",
    content:
      "To Expanse",
  },  
  {
    id: 3,
    title: "In Progress",
    content:
      "To Expanse",
  },
  {
    id: 4,
    title: "In Progress",
    content:
      "To Expanse",
  },
  {
    id: 5,
    title: "In Progress",
    content:
      "To Expanse",
  },
  {
    id: 6,
    title: "In Progress",
    content:
      "To Expanse",
  },
  {
    id: 7,
    title: "In Progress",
    content:
      "To Expanse",
  }
];

function Experiences() {
  return (
    <>
    <Header3 logoSource="/images/PulsarForge-1.png" />
    <section id="experience"style={{paddingBottom: 100, marginTop: 100}}>
      <div className="container">
        <Pagetitle title="Life Time Line" />
        <div className="row">
          <div className="col-md-6">
            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
              {educationData.map((education) => (
                <Timeline key={education.id} education={education} />
              ))}
              <span className="line"></span>
            </div>
          </div>

          <div className="col-md-6">
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
              {experienceData.map((experience) => (
                <Timeline key={experience.id} education={experience} />
              ))}
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
      <span ></span>
    </section>
    
    <Footer />
    </>
  );
}

export default Experiences;
