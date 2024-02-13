import React from "react";
import "../style/profolio.css";
import { Link } from "react-router-dom";
import ProjectCard from "./Project-Card-components";

<<<<<<< HEAD
const ProfolioComponent = () => {
=======
const profolio = () => {
  const rootPath = "/MyWebPage";

>>>>>>> master
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
<<<<<<< HEAD
                <ProjectCard name="Google Login Website"></ProjectCard>
                <ProjectCard name="Online Course System"></ProjectCard>
                <div className="button-feild" style={{ margin: "2rem" }}>
                  <Link className="btn btn-primary" to="/">
                    返回首頁
                  </Link>
                </div>
              </div>

              <div className="side"></div>
              <Link className="btn btn-primary" to={`${rootPath}`}>
                返回首頁
              </Link>
=======
                <Link className="btn btn-primary" to={`${rootPath}`}>
                  返回首頁
                </Link>
              </div>
              <div className="side"></div>
>>>>>>> master
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
=======
      <div></div>
>>>>>>> master
    </main>
  );
};

<<<<<<< HEAD
export default ProfolioComponent;
=======
export default profolio;
>>>>>>> master
