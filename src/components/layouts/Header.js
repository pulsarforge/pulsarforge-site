import React, { useState } from "react";
import Player from "../elements/Player";
import Sound from "../elements/Sound";

function Header({ light, logoSource }) {
  const [toggleNavbar, setToggleNavbar] = useState(false);

  const handleMobilenav = (e) => {
    e.preventDefault();
    setToggleNavbar(!toggleNavbar);
  };

  document.addEventListener("click", function (e) {
    if (e.target.closest(".content-3")) {
      setToggleNavbar(false);
    }
  });

  return (
    <header
      className={
        light
          ? "desktop-header-3 fixed-top light"
          : "desktop-header-3 fixed-top"
      }
    >
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <button
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className="navbar-toggler"
            data-target="#navbarNavDropdown"
            data-toggle="collapse"
            type="button"
            onClick={handleMobilenav}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={
              toggleNavbar
                ? "collapse navbar-collapse show"
                : "collapse navbar-collapse"
            }
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav mx-auto ml-auto scrollspy">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <img style={{width: "310px"}} src={logoSource} alt="Pulsarforge" />
                </a>
              </li>
            </ul>
            <ul className="navbar-nav mx-auto ml-auto scrollspy">
              <li className="nav-item">
                <a className="nav-link side-by-side" href="/">
                  <h5>Devs Labs</h5>
                </a>
                <span><Sound url="/sounds/cowboy.mp3" textInit="🤠" textAfter="🎯" /></span>
              </li>
              <li className="nav-item">
                <a className="nav-link side-by-side" href="/#dev-docs">
                  <h5>Devs Docs</h5>
                </a>
                <span><Sound url="/sounds/gorila.mp3" textInit="🦍" textAfter="💻" /></span>
              </li>
              <li className="nav-item">
                <a className="nav-link side-by-side" href="/civilizations-voxelverse-nfts">
                  <h5>Space Adventures</h5>
                </a>
                <span><Sound url="/sounds/space.mp3" textInit="🌌" textAfter="🪐" /></span>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link side-by-side"
                  href="https://discord.com/invite/4mXg6QSyY8"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h5>Community Vibes</h5>
                </a>
                <span><Sound url="/sounds/swimming.mp3" textInit="🦦" textAfter="🐋" /></span>
              </li>
            </ul>
            <ul className="navbar-nav mx-auto ml-auto scrollspy">
              <li className="nav-item">
                <Player url="/music/jungle.mp3"/>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
