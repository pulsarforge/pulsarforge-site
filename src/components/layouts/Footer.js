import React from "react";

function Footer({ light }) {
  return (
    <footer id="footer" className={light ? "footer light" : "footer"}>
      <div className="container">
        <a className="navigate-link" href="#vibes">
          <h5 className="copyright">
            &copy; {new Date().getFullYear()} Pulsarforge all rights reserved
          </h5>
        </a>
        <a className="copyright" href="/blog"> </a>
      </div>
    </footer>
  );
}

export default Footer;
