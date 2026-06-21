//Syntax: useEffect - used to perform side effects after rendering.
// useEffect(()=>{},[])

import { useEffect, useState } from "react"


const UseEffectDemo = () => {
    const [count,setCount] =  useState(0);
    useEffect(()=>{
    console.log("Effect loaded")
    return(()=> console.log("button clicked"))
    },[count])

    return (
        <>
            <h5 className="text-danger fs-5 bold"> UseEffectDemo </h5>
            <p className="badge text-bg-success p-3">Count:{count}</p>
            <div>
                <button className="btn btn-primary me-2" onClick={() => setCount(count + 1)}> Increment</button>
                <button className="btn btn-primary" disabled={count === 0} onClick={() => setCount(count - 1)}> Decrement</button>
            </div>
        </>

    )
}

export default UseEffectDemo