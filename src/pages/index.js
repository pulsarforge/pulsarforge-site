import React from "react";
import Head from 'next/head'
import Vibes from "../components/sections/Vibes";
import Gardens from "../components/sections/Gardens";
import MakingTheDifferences from "@/components/sections/MakingTheDifferences";

import Shippers from "../components/sections/Shippers";



function Home() {

  return (
    <>
          <Head>
            <meta charset="utf-8" />
            <link rel="icon" href="%PUBLIC_URL%/images/logo.png" sizes="256x256" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta name="mobile-web-app-capable" content="yes" />
            <title>Pulsarforge Developer Labs 🌴</title>
            <meta name="keywords" content="Pulsarforge, Software Engineer, Web3 Labs, AI, Web Development Reactjs, Extensibility and Code Integrations, User Experience Consulting, Civilizations Voxelverse, Programming Path, Scaling Platforms, Shipping Projects"/>
            <meta name="description" content="Developer Labs. Code Garden. Playground. Community. Scaling Platforms."/>
            <meta name="author" content="Pulsarforge" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Pulsarforge Web3 Labs" />
            <meta property="og:description" content="Developer Labs. Code Garden. Playground. Community. Scaling Platforms."/>
            <meta property="og:image" content="https://pulsarforge.io/images/logo.png" />
            <meta property="og:url" content="https://pulsarforge.io/" />
            <meta property="og:author" content="Pulsarforge" />
            <meta property="og:image:width" content="512" />
            <meta property="og:image:height" content="512" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@pulsarforge" />
            <meta name="twitter:creator" content="@pulsarforge" />
            <meta name="twitter:image" content="https://pulsarforge.io/images/logo.png" />
            <meta name="twitter:title" content="Pulsarforge Web3 Labs" />
            <meta name="twitter:description" content="Developer Labs. Code Garden. Playground. Community. Scaling Platforms."/>
            <link rel="apple-touch-icon" href="%PUBLIC_URL%/images/logo.png" />
            <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
          
          </Head>
      
      <main className="content-3">
        <Vibes />
        <br />
        <br />
        <br />
        <Gardens/>
        <br />
        <br />
        <br />
        <MakingTheDifferences />
        <br />
        <br />
        <br />
        <Shippers />
        <br />
        <br />
        <br />
        <div className="spacer" data-height="96"></div>
        <br />
        <br />
        <br />
      </main>
      
    </>
  );
}

export default Home;
