import React from "react";
import "../style/profolio.css";
import { Link } from "react-router-dom";
import ProjectCard from "./Project-Card-components";

const profolio = () => {
  const rootPath = "/MyWebPage";

  return (
    <main>
      <div>
        <div>
          <div className="container">
            <div className="container-fluid grid-container">
              <div className="side"></div>
              <div className="project-container" style={{ minHeight: "70vh" }}>
                <h1>作品集</h1>
                <ProjectCard name="Go Game"></ProjectCard>
                <ProjectCard name="Japan Travel Website"></ProjectCard>
                <ProjectCard name="Personal Website"></ProjectCard>
                <ProjectCard name="GPA calculate Website"></ProjectCard>
                <Link className="btn btn-primary" to={`${rootPath}`}>
                  返回首頁
                </Link>
              </div>
              <div className="side"></div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </main>
  );
};

export default profolio;
