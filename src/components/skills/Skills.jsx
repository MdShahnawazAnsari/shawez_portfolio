import React, { useState, useEffect } from "react";
import "./Skills.scss";
import { technologyLogo } from "../../constentData/data";
const Skills = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [runAnimation, setRunAnimation] = useState(false);

  const controlAnimation = () => {
    if (window.scrollY > 50) setRunAnimation(true);
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlAnimation);
    return () => {
      window.removeEventListener("scroll", controlAnimation);
    };
  }, [lastScrollY]);

  return (
    <section className="skills-section" id="skills">
      <h2>Proficiency In Programs</h2>
      <div className="technology">
        {technologyLogo.map((item, index) => (
          <div
            key={index}
            className="logo"
            style={{
              animation: `${
                runAnimation && `slideLeft 1.5s ease ${index * 0.2}s forwards`
              }`,
            }}
          >
            <img src={item.src} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
