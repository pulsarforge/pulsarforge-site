import React from "react";

function Footer({ light }) {
  return (
    <footer className={light ? "footer light" : "footer"}>
      <div className="container">
        <span className="copyright">
          &copy; 2023 Pulsarforge all rights reserved.
        </span>
      </div>
      <ul className="social-icons light list-inline mb-0 mt-4">
        <li className="list-inline-item">
          <a href="https://discord.com/invite/PvRCtNeBVg" target="_blank" rel="noreferrer">
            <i className="fab fa-discord adjust-social-icons"></i>
          </a>
        </li>
        <li className="list-inline-item">
          <a href="https://github.com/pulsarforge" target="_blank" rel="noreferrer">
            <i className="fab fa-github adjust-social-icons"></i>
          </a>
        </li>
        <li className="list-inline-item">
          <a href="https://twitter.com/pulsarforge" target="_blank"rel="noreferrer">
            <i className="fab fa-twitter adjust-social-icons"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
