import React from "react";

const Employee = ({ name, postname, cost }) => {
  return (
    <p>
      name: <span>{name}</span> <br />
      postname: <span>{postname}</span> <br />
      cost: <span>{cost}</span>
    </p>
  );
};

export default Employee;
