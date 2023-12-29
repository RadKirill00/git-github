import React from 'react';



function App() {
	const obj = {name: 'john', surname: 'smit'};
  return <p>
    name:       <span><strong>{obj.name}</strong></span> 
    <br/>
    surname:    <span>{obj.surname}</span>
  </p>
}


export default App
