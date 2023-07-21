import React from "react";
import { NextSeo } from 'next-seo';
import Pagetitle from "@/components/elements/Pagetitle";
import Vibes from "../components/sections/Vibes";
import Gardens from "../components/sections/Gardens";
import Shippers from "../components/sections/Shippers";



function Home() {

  return (
    <>
        <NextSeo
          title="Pulsarforge Home Labs 🌴"
          description="Home Developer Labs, taking care of the code garden, having fun at the playing field while ccaling platforms. Community first approach."
          openGraph={{
            type: 'website',
            url: 'https://pulsarforge',
            title: 'Pulsarforge Home Labs 🌴',
            description: 'Home Developer Labs, taking care of the code garden, having fun at the playing field while ccaling platforms. Community first approach.',
            images: [
              {
                url: 'https://pulsarforge/images/logo.png',
                width: 800,
                height: 800,
                alt: 'Pulsarforge Labs Logo',
              }
            ],
            siteName: 'Pulsarforge home labs',
            tags: ['Pulsarforge', 'Software Engineer', 'Home Developer Labs', 'Web Development Reactjs', 'Extensibility and Code Integrations', 'Web3', 'AI', 'User Experience Consulting', 'Civilizations Voxelverse Art', 'Programming Path', 'Scaling Platforms'],
          }}
          additionalLinkTags={[
            {
              rel: 'icon',
              href: 'https://pulsarforge/images/logo.png',
            },
            {
              rel: 'apple-touch-icon',
              href: 'https://pulsarforge/images/logo.png',
            }
          ]}
          twitter={{
            handle: '@pulsarforge',
            site: '@site',
            cardType: 'summary_large_image',
          }}
        />
      
      <main className="content-3">
        <Vibes />
        <br />
        <br />
        <br />
        <Gardens/>
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
