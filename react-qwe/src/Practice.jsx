import React from "react";
import qwe from "./qwe";
import Card from "./Card";

const Practice = () => {
  return (
    <>
      <div className="container">
        <h5 className="playlist">ПЛЕЙЛИСТ</h5>
        <h2 className="likes">Мне нравится</h2>
        <div className="authorAndEmail">
          <span className="author">Автор: </span>k1rillpola
        </div>
        <div className="myButtons">
          <button className="pause">| |</button>
          <button className="desc">...</button>
        </div>
      </div>
      <div className="cards">
        {qwe.map((i) => (
          <Card
            id={i.id}
            title={i.title}
            autor={i.autor}
            time={i.time}
            className="card"
            key={i.id}
          />
        ))}
      </div>
    </>
  );
};

export default Practice;
