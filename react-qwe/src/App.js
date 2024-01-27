import React, { useState } from "react";
import Product from "./components/Product";
import User from "./components/User";
import Employee from "./components/Employee";
import qwe from "./qwe";
import styled from "styled-components";
import classes from "./App.module.css"; 
import Buttons from "./Buttons";



function App() {


  return (
    <div class={classes.app}>
      <h2 class={classes.title}>CSS Module Buttons</h2>
      <div class={classes.wrapper}>
        <Buttons />
      </div>
    </div>
  );
}
export default App;
