import React, { useState } from "react";
import qwe from "./qwe";
import Card from "./Card";

const Practice = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeChange = () => {
    setIsDarkMode(!isDarkMode);

    document.body.style.backgroundColor = isDarkMode ? "#1C1C1C" : "#000000";
  };

  const themeButtonStyle = {
    width: "50px",
    height: "50px",
    borderRadius: "50px",
    color: "#6B6B6B",
    border: "1px solid #6B6B6B",
    background: isDarkMode ? "#1C1C1C" : "black", 
  };

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
          <button className="theme"  style={themeButtonStyle} onClick={handleThemeChange}></button>
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
