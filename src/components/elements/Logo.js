import React from "react";
import  Link  from 'next/link';
import Image from "next/image";

function Logo({ logoSource, bootstrapNav }) {
  if (bootstrapNav) {
    return (
      <Link className="navbar-brand" to="/">
        <Image src={logoSource} alt="Pulsarforge" width={120} height={120}/>
      </Link>
    );
  }

  return (
    <div className="site-logo">
      <Link to="/">
        <Image className="site-logo-image" src={logoSource} alt="Pulsarforge" width={120} height={120}/>
      </Link>
    </div>
  );
}

export default Logo;
