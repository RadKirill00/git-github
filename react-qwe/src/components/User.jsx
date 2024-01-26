import React, { useState } from "react";
import qwe from "../qwe";

const User = ({ id, name, surname, age, ban }) => {

  const [isBanned, setIsBanned] = useState(ban);

  function handleClick() {
    setIsBanned(!isBanned)
  }

  return (
    <div>
      <div className="">name: {name}</div>
      <div className="">surname: {surname}</div>
      <div className="">age: {age}</div>
      <div className="">id: {id}</div> 
      <div className="">ban: {isBanned ? 'Пользователь забанен' : 'Пользователь не забанен'}</div> <br />
      <button onClick={handleClick}>  {isBanned ? "Разбанить" : "Забанить"}</button> <br />
    </div>
  );
};

export default User;
