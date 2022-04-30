import React from "react";

function Footer({ light }) {
  return (
    <footer className={light ? "footer light" : "footer"}>
      <div className="container">
        <span className="copyright">
          &copy; 2017-2022 PulsarForge all rights reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
