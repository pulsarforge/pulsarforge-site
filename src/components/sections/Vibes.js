import React from "react";
import Link from "next/link";
import Image from "next/image";
import Sound from "../elements/Sound";
import Player from "../elements/Player";

function Vibes() {


  return (
    <section
      id="vibes"
      className="home d-flex align-items-center"
    >
      <div
        style={{
          background: "url('/images/hero-background.png')",
          backgroundRepeat: "no-repeat",
          height: "100%",
          width: "100%",
          minHeight: "100%",
          backgroundSize: "100%",
        }}
      >

        <div className="intro-logo">
            <Player url="/sounds/swimming.mp3" urlImage="/images/logo.png"/>
        </div>
        <div className="intro">
          <Link className="navigate-link" href="#code-gardens">
            <h1
              style={{
                fontSize: 75,
                color: "#fff",
                textShadow: "3px 3px 2px rgb(37, 37, 37)",
                fontFamily: "DogBrain",
              }}
            >
              Home Developer Labs
            </h1>
          </Link>
          <h2
              style={{
                fontSize: 35,
                textShadow: "3px 3px 2px rgb(37, 37, 37)",
                color: "#fff",
              }}
            >
              Enjoy the views, swim around, hike, and dance peacefully with your animals colleagues
            </h2>
          <div
            className="text-center mt-4"
            style={{ marginBottom: 520, paddingTop: 25 }}
          ></div>
        </div>
      </div>
    </section>
  );
}

export default Vibes;
