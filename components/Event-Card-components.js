import React from "react";

const CardComponents = (props) => {
  return (
    <div className="event-card" id={props.name}>
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
          <button className="btn btn-primary" onClick={props.setOpenCondic}>
            了解更多
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardComponents;
