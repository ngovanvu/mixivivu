import React, { useCallback } from "react";
import styles from "./BoxFeatures.module.css";

const YourComponent = () => {
  // Hàm cuộn mượt mà
  const handleScroll = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <div>
      {/* Navbar Buttons */}
      <div>
        <button onClick={() => handleScroll("home")}>Home</button>
        <button onClick={() => handleScroll("skills")}>Skills</button>
        <button onClick={() => handleScroll("projects")}>Projects</button>
      </div>

      {/* Sections */}
      <div className={styles.feature}>
        <section id="home" className="section home">
          <h1>Home Section</h1>
        </section>
        <section id="skills" className="section skills">
          <h1>Skills Section</h1>
        </section>
        <section id="projects" className="section projects">
          <h1>Projects Section</h1>
        </section>
      </div>
    </div>
  );
};

export default YourComponent;
