import React, { useEffect, useState } from "react";
import Link from "next/link";
import Sound from "../elements/Sound";

function Header({ light, logoSource }) {
  const [toggleNavbar, setToggleNavbar] = useState(false);

  const handleMobilenav = (e) => {
    e.preventDefault();
    setToggleNavbar(!toggleNavbar);
  };
  useEffect(() => {
    const handleClick = (e) => {
      if (e.target.closest('.content-3')) {
        setToggleNavbar(false); // Assuming you have the necessary state and setter function defined
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

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
            <span>🦦</span>
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
                <Link className="nav-link" href="/">
                  <img style={{width: "77px"}} src={logoSource} alt="Pulsarforge" />
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav mx-auto ml-auto scrollspy">
              <li className="nav-item">
                <Link className="nav-link side-by-side" href="/">
                  <h5>HomeLabs</h5>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link side-by-side" href="/LevelUp">
                  <h5>LevelUp</h5>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link side-by-side" href="/CivilizationsVoxelverse">
                  <h5>Planets</h5>
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link side-by-side"
                  href="https://www.redbubble.com/es/people/PulsarForge/shop?asc=u"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h5>Shop</h5>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link side-by-side"
                  href="https://discord.com/invite/4mXg6QSyY8"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h5>Join</h5>
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link side-by-side" href="/DogDays">
                  <h5>Days</h5>
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav mx-auto ml-auto scrollspy">
              <li className="nav-item">
                <Sound url="/music/jungle.mp3" textInit="🌴" textAfter="🎶" />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
