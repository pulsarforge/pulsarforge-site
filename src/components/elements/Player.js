import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

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

function Player ({ url, urlImage }){
  const [playing, toggle] = useAudio(url);

  return (
    <>

      <button style={{background: "none", border: "none", fontSize: "24px"}} onClick={toggle}>
        {playing ? 
          (  <>

            <Image
              src={urlImage}
              alt="Pulsarforge"
              width={420}
              height={420}
            /> 
            <h5>Muscles Flexing</h5>
           </>
          ) 
          : 
          (
            <>
            <Image
              src={urlImage}
              alt="Pulsarforge"
              width={420}
              height={420}
            /> 
            
            </>
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
