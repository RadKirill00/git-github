import React, { useState } from "react";
import Product from "./components/Product";
import User from "./components/User";
import Employee from "./components/Employee";
import qwe from "./qwe";



function App() {


  return (
    <div>
      
      <Product />
      <div>
        {qwe.map((i) => (
          <User
            id={i.id}
            name={i.name}
            surname={i.surname}
            age={i.age}
            ban={i.ban}
          />
        ))}
      </div>
      <Employee name={"Kirill"} postname={"Radchenko"} cost={300} />
      <Employee name={"Andrey"} postname={"qweqwe"} cost={400} />
    </div>
  );
}
export default App;
