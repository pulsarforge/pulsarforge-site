import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Garden2022Json from "../../data/gardening-monthly-2022.json";

function Gardens() {
  const allData2022 = Garden2022Json;
  
  return (
    <section id="code-gardens">
      <div
        style={{
          paddingLeft: "30px",
          paddingRight: "30px",
          marginTop: "100px",
        }}
      >
        <a className="navigate-link" href="#passion-projects">
          <Pagetitle title="Open code gardens" />
        </a>
      </div>
      <div style={{ paddingLeft: "30px", paddingRight: "30px" }}>
        <div className="row align-items-center" style={{color: "#26a641"}}>
          <p style={{ color: "#006d32", fontSize: 30 }}>Previously working for teams, startups, companies</p>
          <p style={{ color: "#fff", fontSize: 30 }}>@pulsarforge on GitHub</p>
          <p style={{ fontSize: 30,  }}>2022</p>
          <ul style={{ fontWeight: "bold" }}>
          {allData2022.map((data2022) => (
            <li className="list-inline-item" style={{ paddingLeft: "42px", paddingRight: "42px" }} key={data2022.id}>
              <p style={{ color: "#006d32", fontSize: 30 }}>{data2022.name}</p>
              <p style={{ color: "#39d353", fontSize: 30 }}>{data2022.totalContributions}</p>
            </li>
          ))}
          </ul>
          <p style={{ fontSize: 30 }}>2023</p>
          <p style={{ color: "#39d353", fontSize: 30, fontWeight: "bold" }}>So far 592</p>
          <p style={{ color: "#006d32", fontSize: 30, }}>Quote registry, turtle soon </p>
        </div>
      </div>
    </section>
  );
}

export default Gardens;
