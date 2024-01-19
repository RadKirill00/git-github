import { useState } from "react";


export default function Count() {
  let [res, setRes] = useState(0)



  return (
    <>
    <h1>{res}</h1>
    <button onClick={() => setRes((qwe) => qwe + 1)}>Up</button>
    <button onClick={() => setRes((qwe) => qwe - 1)}>Low</button>
    </>
  )
}