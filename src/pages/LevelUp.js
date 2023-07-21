import React, { useState } from "react";
import { NextSeo } from 'next-seo';;

import Pagetitle from "../components/elements/Pagetitle";
import DeveloperVideos from "../components/sections/DeveloperVideos";
import MakingTheDifference from "../components/sections/MakingTheDifferences";
import DevDocs from "../components/sections/DevDocs";


function LevelUp() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const headerToggler = (e) => {
    e.preventDefault();
    setToggleMenu(!toggleMenu);
  };

  return (
    <>
        <NextSeo
          title="Skills Level Up 🎯"
          description="Level up your code knowledge with amazing byte size videos, find my usual freelance services, and enhance your skills diving into my developer documentation"
          openGraph={{
            type: 'website',
            url: 'https://pulsarforge.io/LevelUp',
            title: 'Skills Level Up 🎯',
            description: 'Level up your code knowledge with amazing byte size videos, find my usual freelance services, and enhance your skills diving into my developer documentation',
            images: [
              {
                url: 'https://pulsarforge.io/images/river-otter.jpg',
                width: 1920,
                height: 1280,
                alt: 'Skills Logo',
              }
            ],
            siteName: 'Pulsarforge home labs',
            tags: ['Developer videos', 'freelance', 'services', 'developer documentation', 'skills', 'level up'],
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
      <section>
        <div className="container">
          <div className="row blog-wrapper fix-spacing" >
            <div className="page-title-center" style={{background: "url('/images/river-otter-1080.jpg')", borderRadius: 60}}>
              <br />
              <br/>   
              <br/>
              <br/> 
              <br/>
              <br/> 
              <br/>
              <br/> 
              <br/>
              <br/> 
              <br/>
              <br/> 
              <br/>
              <br/> 
              <br/>
              <br/>  
              <br/>
              <br/> 
              <br/>
              <br/>  
              <Pagetitle title="You have found the Treasures" />
              <Pagetitle title="Developer Videos, Services, and Docs" />
              <br/>
              <br/> 
              <br/>
              <br/> 
              <br/>
              <br/> 
              <br/>
              <br/>
            </div>
            <div className="page-title-center">        
                <DeveloperVideos/>
            </div>
            <div className="page-title-center">        
                <MakingTheDifference />
            </div>
            <div className="page-title-center">        
                <DevDocs />
                <br/>
                <br/>   
                <br/>
                <br/>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}

export default LevelUp;
