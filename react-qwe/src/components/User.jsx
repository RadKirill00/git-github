import React, { useState } from 'react'



const User = ({id, name, surname, age}) => {

  return (
    <div>
		<div className="">name: {name}</div> 
		<div className="">surname: {surname}</div> 
    <div className="">age: {age}</div> 
    <div className="">id: {id}</div> <br />
	</div>
  )
}

export default User