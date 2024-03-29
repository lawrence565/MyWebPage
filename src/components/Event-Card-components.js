import React from "react";

const CardComponents = (props) => {
  return (
    <div className="project-card" id={props.name}>
      <div className="card" style={{ width: "18rem" }}>
        <img
          style={{ width: "18rem" }}
          src="/images/spaceport.jpg"
          className="card-img-top"
          alt={props.name}
        ></img>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.description}</p>
          <a
            href="https://www.google.com/?client=safari"
            className="btn btn-primary"
          >
            go to video
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardComponents;
