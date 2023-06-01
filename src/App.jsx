import React from "react";
import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
function App() {
  return (
    <>
      <Header />
      <Intro />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
