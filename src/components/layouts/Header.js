import React, { useState } from "react";
import Logo from "../elements/Logo";
import Player from "../elements/Player";

function Header({ light, logoSource, bootstrapNav }) {
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
          <Logo logoSource={logoSource} bootstrapNav={bootstrapNav} />
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
            <ul className="navbar-nav ml-auto scrollspy">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/"
                >
                  <h5>Web3 Labs 🤠</h5>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/civilizations-voxelverse-nfts">
                  <h5>Explore ✨</h5>
                </a>
              </li>
              <li className="nav-item">
              <a
                  className="nav-link"
                  href="/">
                  <h5>On the Field ⌛</h5>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/blogs"
                >
                  <h5>Blog ✍</h5>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="mailto:pulsarforgelabs@gmail.com">
                  <h5>Good Vibes 📬</h5>
                </a>
              </li>
              <li>
                <Player url="/music/jungle.mp3" />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
