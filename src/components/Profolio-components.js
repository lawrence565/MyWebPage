import React from "react";
import "../style/profolio.css";
import { Link } from "react-router-dom";
import ProjectCard from "./Project-Card-components";

<<<<<<< HEAD
const ProfolioComponent = () => {
=======
const profolio = () => {
  const rootPath = "/MyWebPage";

>>>>>>> 5572d13a (Changing footer style)
  return (
    <main>
      <div>
        <div>
          <div className="container">
            <div className="container-fluid grid-container">
              <div className="side"></div>
              <div className="project-container" style={{ minHeight: "70vh" }}>
                <h1>作品集</h1>
<<<<<<< HEAD
                <ProjectCard name="Go Game"></ProjectCard>
                <ProjectCard name="Japan Travel Website"></ProjectCard>
                <ProjectCard name="Personal Website"></ProjectCard>
                <ProjectCard name="GPA calculate Website"></ProjectCard>
                <ProjectCard name="Google Login Website"></ProjectCard>
                <ProjectCard name="Online Course System"></ProjectCard>
                <div className="button-feild" style={{ margin: "2rem" }}>
                  <Link className="btn btn-primary" to="/">
                    返回首頁
                  </Link>
                </div>
              </div>

              <div className="side"></div>
=======
                <Link className="btn btn-primary" to={`${rootPath}`}>
                  返回首頁
                </Link>
              </section>
>>>>>>> 5572d13a (Changing footer style)
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </main>
  );
};

export default ProfolioComponent;
