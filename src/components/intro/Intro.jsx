import React, { useEffect, useState } from "react";
import "./Intro.scss";
const iconItems = [
  {
    icon: "fa-brands fa-linkedin-in",
    link: "https://www.linkedin.com/in/shawez-faraz-60300b209/",
  },
  {
    icon: "fa-brands fa-twitter",
    link: "#",
  },
  {
    icon: "fa-brands fa-facebook-f",
    link: "#",
  },
  {
    icon: "fa-solid fa-envelope",
    link: "mailto:shawezfaraz@gmail.com?subject=Recruitment",
  },
];

const Intro = () => {
  // const [text, setText] = useState("Video Editor & content strategist");

  // for text animation
  // const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // let interval = null;
  // useEffect(() => {
  //   const screen = document.querySelector(".home-content");
  //   const name = document.querySelector(".randome-text");

  //   screen.addEventListener("mouseenter", startAnimation);
  //   screen.addEventListener("mouseleave", stopAnimation);

  //   function startAnimation() {
  //     let iteration = 0;

  //     clearInterval(interval);

  //     interval = setInterval(() => {
  //       setText((prevText) =>
  //         prevText
  //           .split("")
  //           .map((letter, index) => {
  //             if (index < iteration) {
  //               return name.dataset.value[index];
  //             }

  //             return letters[Math.floor(Math.random() * 26)];
  //           })
  //           .join("")
  //       );

  //       if (iteration >= name.dataset.value.length) {
  //         clearInterval(interval);
  //       }

  //       iteration += 1 / 3;
  //     }, 30);
  //   }

  //   function stopAnimation() {
  //     clearInterval(interval);
  //     setText(name.dataset.value);
  //   }

  //   return () => {
  //     screen.removeEventListener("mouseenter", startAnimation);
  //     screen.removeEventListener("mouseleave", stopAnimation);
  //   };
  // }, []);

  return (
    <>
      <section id="intro" className="home">
        <div className="home-content">
          <section className="content-container">
            <h2>Hi,</h2>
            <h1>Shawez Faraz</h1>
            <h3>
              <b>Video Editor & content strategist</b>
            </h3>
            <p>
              A highly skilled video editor, content creator with a passion for
              storytelling.
            </p>
            <div className="social-media">
              {iconItems.map((elem, index) => (
                <a
                  key={index}
                  href={elem.link}
                  style={{
                    animation: `slideLeft 0.5s ease ${index * 0.2}s forwards`,
                  }}
                  target="_blank"
                >
                  <i className={elem.icon}></i>
                </a>
              ))}
            </div>
            <a href="/shawez_cv.pdf" download className="btn">
              Download CV
            </a>
          </section>
          <section className="image-contanier">
            <img src="/profile1.jpg" alt="profile" />
            {/* <div className="box">
              <div className="spin-container">
                <div className="shape">
                  <div className="bd"></div>
                </div>
              </div>
            </div> */}
          </section>
        </div>
        <div className="animation-container">
          <div className="animationBtn" onClick={() => window.scrollTo(0, 650)}>
            <span className="ball"></span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
