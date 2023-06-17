import React from "react";

function Footer({ light }) {
  return (
    <footer id="footer" className={light ? "footer light" : "footer"}>
      <div className="container">
        <a className="navigate-link" href="#vibes">
          <h5 className="copyright">
            
          &copy; {new Date().getFullYear()} and beyond <img src="/images/pulsarforge-logo-font.png" alt="Pulsarforge Letter Logo" /> all rights reserved
          </h5>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
