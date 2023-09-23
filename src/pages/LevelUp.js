import React, { useState } from "react";

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
