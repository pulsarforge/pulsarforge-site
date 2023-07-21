import React, { useState, useEffect, useRef, useCallback } from "react";

function useAudio(url) {
  const audio = useRef(
    typeof Audio !== "undefined" ? new Audio(url) : null
  );
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.current.play() : audio.current.pause();
  }, [playing, audio]);

  useEffect(() => {
    audio.current.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.current.removeEventListener("ended", () => setPlaying(false));
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
