import React from "react";
import  Link  from 'next/link';

function Logo({ logoSource, bootstrapNav }) {
  if (bootstrapNav) {
    return (
      <Link className="navbar-brand" to="/">
        <img src={logoSource} alt="Pulsarforge" />
      </Link>
    );
  }

  return (
    <div className="site-logo">
      <Link to="/">
        <img className="site-logo-image" src={logoSource} alt="Pulsarforge" />
      </Link>
    </div>
  );
}

export default Logo;
