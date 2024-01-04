import React from 'react'
import { nanoid } from 'nanoid'
import { useState } from 'react';

// Давайте положим каждый элемент этого массива в абзац и выведем эти абзацы в диве. Для этого мы можем воспользоваться любым удобным циклом JavaScript. Например, обычным for-of: 
// Однако, в React для таких дел более принято использовать метод map:

//   const arr = ['a', 'b', 'c', 'd', 'e'];
//   const res = arr.map(function(num){
//     return <li>{num}</li>
//   })
//   return <ul>
//     {res}
//   </ul>
  function Practice() { 
    const [res, setRes] = useState(1)
    function changeHandler(event) {
      setRes(event.target.value);
    }
    let num1 = 'HTML'
    let num2 = 'CSS'
    let num3 = 'JS'

    return <div className="">
      <p> 
      {num1}  <input type="radio" name='radio' value={1} checked={res === '1' ? true : false} onChange={changeHandler}/>
      {num2}  <input type="radio" name='radio' value={2} checked={res === '2' ? true : false} onChange={changeHandler}/>
      {num3}  <input type="radio" name='radio' value={3} checked={res === '3' ? true : false} onChange={changeHandler}/></p>
      <p>{res === '1' ? num1 : null}
        {res === '2' ? num2 : null}
        {res ==='3' ? 'Вы молодец, JS очень хороший выбор' : null}

      </p>
    </div>
}



export default Practice




