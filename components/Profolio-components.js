import React, { useState } from "react";
import "../style/profolio.css";
import { Link } from "react-router-dom";
import ProjectCard from "./Project-Card-components";
import PopupComponent from "./Popup-component";

const ProfolioComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const setOpenCondic = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  return (
    <main>
      <div>
        <div>
          <div className="container">
            <div className="container-fluid grid-container">
              <div className="side"></div>
              <div className="project-container" style={{ minHeight: "70vh" }}>
                <h1>作品集</h1>

                <ProjectCard
                  name="Go Game"
                  setOpenCondic={setOpenCondic}
                ></ProjectCard>
                <ProjectCard
                  name="Japan Travel Website"
                  setOpenCondic={setOpenCondic}
                ></ProjectCard>
                <ProjectCard
                  name="Personal Website"
                  setOpenCondic={setOpenCondic}
                ></ProjectCard>
                <ProjectCard
                  name="GPA calculate Website"
                  setOpenCondic={setOpenCondic}
                ></ProjectCard>
                <ProjectCard
                  name="Google Login Website"
                  setOpenCondic={setOpenCondic}
                ></ProjectCard>
                <ProjectCard
                  name="Online Course System"
                  setOpenCondic={setOpenCondic}
                ></ProjectCard>

                <div className="button-feild" style={{ margin: "2rem" }}>
                  <Link className="btn btn-primary" to="/">
                    返回首頁
                  </Link>
                </div>
              </div>
              <div className="side"></div>
            </div>
          </div>

          {isOpen && <PopupComponent setOpenCondic={setOpenCondic} />}
        </div>
      </div>
      <div></div>
    </main>
  );
};

export default ProfolioComponent;
