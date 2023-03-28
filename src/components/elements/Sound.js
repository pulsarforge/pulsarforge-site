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
