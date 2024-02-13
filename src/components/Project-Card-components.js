import React from "react";

const ProfolioComponents = (props) => {
  return (
    <div className="project-card">
      <div className="project-img-container">
        <img
          className="project-img"
          src="/images/sakura.jpg"
          alt="This is Sakura."
        />
      </div>
      <div className="project-info">
        <h3 className="project-name">{props.name}</h3>
        <p className="project-desc">{props.description}</p>
      </div>
    </div>
  );
};

export default ProfolioComponents;
