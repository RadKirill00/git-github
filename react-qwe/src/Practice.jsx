import React from 'react'


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
    const users = [
      { id: 1, name: 'user1', surn: 'surn1', age: 30},
      { id: 2, name: 'user2', surn: 'surn2', age: 31},
      { id: 3, name: 'user3', surn: 'surn3', age: 32},
    ];

    const rows = users.map(function(item) {
      return <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.age}</td>
      </tr>;
    });
    
    return <table>
      <thead>
        <tr>
          <td>название</td>
          <td>стоимость</td>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>;
}
export default Practice




