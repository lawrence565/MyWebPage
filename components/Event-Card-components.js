import React from "react";
import { Link } from "react-router-dom";

const mxpComponents = (props) => {
  return (
    <div className="project-card" id={props.name}>
      <div className="card" style={{ width: "18rem" }}>
        <img
          style={{ width: "18rem" }}
          src="images/spaceport.JPG"
          className="card-img-top"
          alt={props.name}
        ></img>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.description}</p>
          <a href="#" className="btn btn-primary">
            go to video
          </a>
        </div>
      </div>
    </div>
  );
};

export default mxpComponents;
