import React from 'react'
import { useState } from 'react'

export default function Counter() {
  const [count,setCount]= useState(0);
    function onIncrement() {
        setCount(count+1);
        console.log(`Incremented Count is ${count}`);
        
        
    }
    

  return (
    <div>
      <h2>Count is {count}</h2>
      <button onClick={onIncrement}> Counter</button>
    </div>
  )
}
