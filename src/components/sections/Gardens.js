import React from "react";
import Link from "next/link";
import Pagetitle from "../elements/Pagetitle";
import Garden2022Json from "../../data/gardening-yearly.json";
import Sound from "../elements/Sound";

function Gardens() {
  const allData = Garden2022Json;
  
  return (
    <section id="code-gardens">
                
      <div
        className="page-title-center"
        style={{
          paddingLeft: "30px",
          paddingRight: "30px",
          marginTop: "100px",
        }}
      >
        <Link className="navigate-link" href="#passion-projects">
          <Pagetitle title="The Highlights & Open code garden" />
        </Link>
      </div>
      <div style={{ paddingLeft: "30px", paddingRight: "30px" }}>
        <div className="row align-items-center page-title-center" style={{color: "#26a641"}}>
          <p style={{ color: "#fff", fontSize: 30, marginBottom: 100 }}>@pulsarforge at GitHub, Highlights, Open Source</p>
          <ul style={{ fontWeight: "bold" }}>
          {allData.map((data) => (
            <li className="list-inline-item" style={{ paddingLeft: "42px", paddingRight: "42px" }} key={data.id}>
              
              <p style={{ color: "#006d32", fontSize: 24 }}>{data.year}</p>
              <Sound url={data.soundUrl} textInit={data.totalContributions} textAfter={data.afterText} />
            </li>
          ))}
          </ul>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="page-title-center">
          <Pagetitle title="Newsletter" />
          <br/>
          <br/>
          <iframe src="https://pulsarforge.substack.com/embed" style={{width: "480px", height:"480px", border: "1px", borderRadius: "40px", solid: "#EEE", background: "white"}} title="Newsletter"></iframe>
        </div>
      </div>
    </section>
  );
}

export default Gardens;
