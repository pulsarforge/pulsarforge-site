import React, { useEffect, useState } from "react";
import Link from "next/link";
import Sound from "../elements/Sound";
import Image from "next/image";

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
                  <Image width={77} height={77} src={logoSource} alt="Pulsarforge" />
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav mx-auto ml-auto scrollspy">
              <li className="nav-item">
                <Link className="nav-link side-by-side" href="/">
                  <h5>Home Labs</h5>
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
