import React from "react";
import ReactPlayer from "react-player/youtube";

import "./style.scss";

const VideoPopup = ({ show, setShow, videoId }) => {
  return (
    <section className="video-popup">
      <span className="overlay" onClick={() => setShow(false)}></span>
      <button className="close-button" onClick={() => setShow(false)}>
        X
      </button>
      <dialog open={show} className="video-dialog">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          controls
          width="100%"
          height="100%"
        />
      </dialog>
    </section>
  );
};

export default VideoPopup;
