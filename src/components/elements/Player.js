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
      <button className="btn btn-default player-button" onClick={toggle}>
        {playing ? (
          <i className="icon-control-pause"></i>
        ) : (
          <i className="icon-control-play"></i>
        )}
      </button>
    </>
  );
};

export default Player;
