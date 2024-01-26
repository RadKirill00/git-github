import React, { useState } from "react";
import qwe from "../qwe";


const User = ({ id, name, surname, age, ban }) => {

  const [isBanned, setIsBanned] = useState(ban);

  function handleClick() {
    setIsBanned(!isBanned)
  }

  return (
    <div style={{border: '2px solid brown', padding: '20px', margin: '10px', width: '250px'}}>
      <div className="">name: {name} </div>
      <div className="">surname: {surname}</div>
      <div className="">age: {age}</div>
      <div className="">id: {id}</div> 
      <div className="">ban: {isBanned ? 'Пользователь забанен' : 'Пользователь не забанен'}</div> <br />
      <button onClick={handleClick} style={{width: '100%'}}>  {isBanned ? "Разбанить" : "Забанить"}</button> <br />
    </div>
  );
};

export default User;
