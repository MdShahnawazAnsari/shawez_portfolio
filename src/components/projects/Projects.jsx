import React, { useState, useEffect } from "react";
import SingleProject from "./singleProject/SingleProject";
import "./Projects.scss";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { projectData } from "../../constentData/data";

const Projects = () => {
  const [runAnimation, setRunAnimation] = useState(false);

  const [lastScrollY, setLastScrollY] = useState(0);

  const controlAnimation = () => {
    if (window.scrollY > 300) {
      setRunAnimation(true);
    }
    setLastScrollY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", controlAnimation);
    return () => window.removeEventListener("scroll", controlAnimation);
  }, [lastScrollY]);
  return (
    <section id="projects">
      <div className="single-page-projects">
        <div
          className="heading"
          style={
            runAnimation
              ? { animation: "slideBottom 2s ease forwards" }
              : { animation: "" }
          }
        >
          WORK EXPERIENCE
        </div>
        <div
          className="projects"
          style={
            runAnimation
              ? { animation: "slideRight 2s ease forwards" }
              : { animation: "" }
          }
        >
          <VerticalTimeline layout={"2-columns"} lineColor="var(--text-black)">
            <SingleProject data={projectData[4]} />
            <SingleProject data={projectData[3]} />
            <SingleProject data={projectData[2]} />
            <SingleProject data={projectData[1]} />
            <SingleProject data={projectData[0]} />
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Projects;
