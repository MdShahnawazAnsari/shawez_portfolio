import React, { useState, useEffect } from "react";
import SingleProject from "./singleProject/SingleProject";
import "./Projects.scss";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import axios from "axios";
import VideoPopup from "../video/VideoPopup";
const base_uri = "https://shawez-admin.vercel.app";
const dev_url = "http://localhost:3000";
const Projects = () => {
  const [runAnimation, setRunAnimation] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [projects, setProjects] = useState(null);
  const [show, setShow] = useState(false);

  const [popUpVideo, setPopUpVideo] = useState(null);
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

  const fetchProject = async () => {
    try {
      let { data } = await axios.get(base_uri + "/api/projects");
      setProjects(data?.allProjects);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProject();
  }, []);

  return (
    <>
      {show && popUpVideo ? (
        <VideoPopup show={show} setShow={setShow} videoId={popUpVideo} />
      ) : null}

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
            <VerticalTimeline
              layout={"2-columns"}
              lineColor="var(--text-black)"
            >
              {projects &&
                projects.map((p) => (
                  <SingleProject
                    key={p?._id}
                    data={p}
                    setShow={setShow}
                    setPopUpVideo={setPopUpVideo}
                  />
                ))}
            </VerticalTimeline>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
