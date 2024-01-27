import React, { useState } from "react";
import Product from "./components/Product";
import User from "./components/User";
import Employee from "./components/Employee";
import qwe from "./qwe";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
`;

const Input = styled.input`
  margin: 5px;
  font-size: 18px;
`;
function App() {


  return (
    <div>
      <Container>
        <Input disabled/>
        <Input />
        <Input type="reset"/>
      </Container>
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
