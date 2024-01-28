import React, { useState } from "react";
import Product from "./components/Product";
import User from "./components/User";
import Employee from "./components/Employee";
import qwe from "./qwe";
import styled from "styled-components";
import classes from "./App.module.css";
import Buttons from "./Buttons";
import { useEffect } from "react";


function App() {
  const [blockVisible, setBlockVisible] = useState(false);
  
  function Visible() {
    setBlockVisible(true);
  }
  function UnVisible() {
    setBlockVisible(false);
  }

  function instr() {
    
    if (blockVisible) {
      UnVisible();
    }
  }

  useEffect(() => {
    window.addEventListener("click", instr);

    return () => {
      window.removeEventListener("click", instr);
    };
  }, [blockVisible]);
  return (
    <div>
      <button onClick={(e) => { e.stopPropagation(); Visible(); }}>Показать блок</button>

      {blockVisible && (
        <div style={{ border: "1px solid black" }}>Блок отображается</div>
      )}
    </div>
  );
}

export default App;
