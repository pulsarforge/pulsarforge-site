import Link from "next/link";
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

function Sound ({ url, textInit, textAfter }){
  const [playing, toggle] = useAudio(url);

  return (
    <>
      <button style={{background: "none", border: "none", fontSize: "24px", marginLeft: "5px"}} onClick={toggle}>
        {!playing ? (
          <i>{textInit}</i>
        ) : (
          <i>{textAfter}</i>
        )}
      </button>
    </>
  );
};

export default Sound;
