import React from "react";

const Card = ({ id, title, autor, time }) => {
  return (
    <a href="#" className="card-link">
      <div className="components card" id={`card-${id}`}>
        <span className="card-id">{id}</span>{" "}
        <span className="card-title">{title}</span>{" "}
        <span className="card-autor">{autor}</span>{" "}
        <span className="card-time">{time}</span>
      </div>
    </a>
  );
};

export default Card;
