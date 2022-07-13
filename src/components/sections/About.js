import React from "react";
import Pagetitle from "../elements/Pagetitle";

const aboutContent = {
  name: "PulsarForge",
  avatarImage: "/images/Oliver_M.webp",
  content:
    "People say: Data is the new oil, and in order to find, refine into a final valuable product, and ship oil, It is required a huge amount of efforts and knowledge. I am the person who unlock the oil or most known as DATA by: displaying data in front-end, accessing data with APIs, breaking silos of data and throught API Development, GraphQL. I have more than 5 years on the road of Software Development, I have worked for multinational companies as Inetum, Adidas, HP, and nowadays I mostly work as a Bounty Hunter, from time to time for DAOs and also for clients. Let's end up former presentations, and open the code party, let's build together and ship those projects, start by joining to voxelverse discord.",
};


function About() {
  return (
    <section id="about">
      <div className="container">
        <Pagetitle title="About" />
        <h2>Web3 Devs Labs, NFTs and Community. <a href="https://discord.com/invite/frYAsD2DjT" target="_blank" rel="noreferrer">Join here Discord</a></h2>
        <h3>Working in a descentralized way, DAO path.</h3>
        <h2>Contributing to Open Source. CoFounder of: <a href="https://blockversekit.pages.dev/" target="_blank" rel="noreferrer">Blockversekit</a></h2>
        <h3>Multi chain analytics DApp, and Web3 Developer Team.</h3>
        <div className="row">
          <div className="col-md-3">
            <div className="text-center text-md-left">
              <img src={aboutContent.avatarImage} alt={aboutContent.name} style={{borderRadius: 200}} />
            </div>
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
          </div>

          <div className="col-md-9 triangle-top-sm">
            <div className="rounded bg-white shadow-dark padding-30">
              <div className="row">
                <div className="col-md-10">
                  <p>{aboutContent.content}</p>
                  <div
                    className="spacer d-md-none d-lg-none"
                    data-height="30"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer" data-height="70"></div>
      </div>
    </section>
  );
}

export default About;
