// React.memo() prevents a component from re-rendering when its props have not changed.

const Child = React.memo(({name})=>{
    console.log("Child rendered");
    return <h2>{name}</h2>
});

import React, { useState } from 'react'

const Reactmemo = () => {
    const [count,setCount] =  useState(0);

  return (
    <>
    
    <Child name = "Tamillll"/>
     <p className="badge text-bg-success p-3">Count:{count}</p>
      <div>
        <button className="btn btn-primary me-2" onClick={() => setCount(count + 1)}> Increment</button>
        <button className="btn btn-primary"   disabled={count === 0} onClick={() => setCount(count - 1)}> Decrement</button>
      </div>
    </>
  )
}

export default Reactmemo