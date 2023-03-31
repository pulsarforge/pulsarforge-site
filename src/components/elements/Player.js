import React, { useState, useEffect } from "react";

function useAudio(url) {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing, audio]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, [audio]);

  return [playing, toggle];
};

function Player ({ url }){
  const [playing, toggle] = useAudio(url);

  return (
    <>

      <button style={{background: "none", border: "none", fontSize: "24px"}} onClick={toggle}>
        {playing ? 
          (  <>
            <i>💃</i>
            <a
            className="nav-link side-by-side"
            style={{paddingLeft: "35px"}}
            href="https://soundcloud.com/pulsarforge/reposts"
            target="_blank"
            rel="noreferrer"
          >
            <h5>Stage</h5> 
          </a>

           
            </>
          ) 
          : 
          (
            <i>🌴</i>
          )
        }
      </button>
      <span>
        {playing ? 
          (              
            <></>
          ) 
          : 
          (
            <></>
          ) 
      }
      </span>
      </>
  );
};

export default Player;
