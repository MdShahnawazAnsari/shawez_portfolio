import React from "react";
import "./SingleProject.scss";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function SingleProject({ data, setPopUpVideo, setShow }) {
  const { title, description, projectLink, _id } = data;

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
      key={_id}
    >
      <div className="project-container">
        <div
          className="thumbnail"
          onClick={() => {
            setPopUpVideo(projectLink);
            setShow(true);
          }}
        >
          <img
            src={`https://img.youtube.com/vi/${projectLink}/mqdefault.jpg`}
          />
        </div>
        <div className="name">
          <h2>{title}</h2>
          {/* <h2>{asIn}</h2> */}
        </div>
        <p className="summary-heading">{description}</p>
      </div>
    </VerticalTimelineElement>
  );
}

export default SingleProject;
