import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 1,
    title: "Art Stream",
    content:
      "Delivering self organized voxels, Nº ???? ",
  },
  {
    id: 2,
    title: "NEAR DAO",
    content:
      "On Astrodao",
  },
  {
    id: 3,
    title: "Partnerships",
    content:
      "Contact us for collabs",
  },
];

const experienceData = [
  {
    id: 1,
    title: "Merchandise Line",
    content:
      "Fine prints, outstanding clothing",
  },
  {
    id: 2,
    title: "Augmented Reality",
    content:
      "For all to take pics",
  },
  {
    id: 3,
    title: "Story Mode On",
    content:
      "Each Exoplanet is an ecosystem",
  },
];

function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Milestones in progress and done" />
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
    </section>
  );
}

export default Experiences;
