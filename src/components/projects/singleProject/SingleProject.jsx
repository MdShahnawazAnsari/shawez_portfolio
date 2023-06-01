import React, { useState } from "react";
import "./SingleProject.scss";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import VideoPopup from "../../video/vidioPopUp";

function SingleProject({ data: { title, asIn, id, summary } }) {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  return (
    <VerticalTimelineElement
      contentStyle={{
        borderRadius: 25,
        border: "1px solid var(--action)",
        boxShadow: "0 0 10px var(--action)",
        background: "var(--background-second)",
      }}
      icon={<i className="fa-brands fa-youtube"></i>}
      iconStyle={{
        color: "var(--action)",
        fontSize: "2.5rem",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
      key={title}
    >
      <div className="project-container">
        <div
          className="thumbnail"
          onClick={() => {
            setVideoId(id);
            setShow(true);
          }}
        >
          <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} />
        </div>
        <div className="name">
          <h3>{title}</h3>
          <h2>{asIn}</h2>
        </div>
        <div className="summary-heading">
          <span children="summary">
            <i className="fa-solid fa-calendar" /> From {summary}
          </span>
        </div>
        <VideoPopup
          show={show}
          setShow={setShow}
          videoId={videoId}
          setVideoId={setVideoId}
        />
      </div>
    </VerticalTimelineElement>
  );
}

export default SingleProject;
