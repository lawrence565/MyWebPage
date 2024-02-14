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
<<<<<<< HEAD:src/components/Event-Card-components.js
          <a
            href="https://www.google.com/?client=safari"
            className="btn btn-primary"
          >
            go to video
          </a>
=======
          <button className="btn btn-primary" onClick={props.setOpenCondic}>
            了解更多
          </button>
>>>>>>> ed45aa54f22fb44fb8e34193996e02d40b59023c:components/Event-Card-components.js
        </div>
      </div>
    </div>
  );
};

export default CardComponents;
