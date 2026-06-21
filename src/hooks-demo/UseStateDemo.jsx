//Syntax: const[state,setState] =  useState(initialValue);
// useState is used to create and manage state in a functional component. 
// When the state changes, the component re-renders.

import { useState } from "react"
const UseStateDemo = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <h5 className="text-danger fs-5 bold"> UseStateDemo </h5>
      <p className="badge text-bg-success p-3">Count:{count}</p>
      <div>
        <button className="btn btn-primary me-2" onClick={() => setCount(count + 1)}> Increment</button>
        <button className="btn btn-primary"   disabled={count === 0} onClick={() => setCount(count - 1)}> Decrement</button>
      </div>

    </>
  )
}

export default UseStateDemo