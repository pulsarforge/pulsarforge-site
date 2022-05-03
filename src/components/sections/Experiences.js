import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 1,
    title: "Art Stream",
    years: "2022 Q2 - 2023 Q2",
    content:
      "Releasing in batches, 10.000  Voxelverse Exoplanets",
  },
  {
    id: 2,
    title: "NEAR DAO",
    years: "2022 - Q2",
    content:
      "On Astrodao, first class experience.",
  },
  {
    id: 3,
    title: "1º Batch Voxelverse Exoplanets",
    years: "2022 - Q2",
    content:
      "On Endemic.app, Aurora, Ethereum.",
  },
  {
    id: 4,
    title: "Partnerships",
    years: "2022 - Beyond",
    content:
      "Always ongoing, contact us for collabs.",
  },
];

const experienceData = [
  {
    id: 1,
    title: "Merchandise Line",
    years: "2022 - Q3",
    content:
      "Fine high quality prints, and outstanding clothing.",
  },
  {
    id: 2,
    title: "Augmented Reality Experiences",
    years: "2023 - Q1",
    content:
      "On sketchfab, for all to enjoy.",
  },
  {
    id: 3,
    title: "Expanse Voxelverse",
    years: "2023  Q2 - 2024 Q2",
    content:
      "Each Exoplanet is a ecosystem.",
  },  
  {
    id: 4,
    title: "Increase Ecosystem and Initiatives",
    years: "2024 Q3 - Beyond",
    content:
      "Here for the long marathon.",
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
