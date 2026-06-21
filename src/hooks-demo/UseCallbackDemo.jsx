// useCallback memoizes a function.
// Syntax const fn = useCallback(()=>{},[])
import { Alert } from 'bootstrap'
import React, { useCallback } from 'react'

const UseCallbackDemo = () => {
    const show = useCallback(()=>{
        console.log("Callback rendered when event or function call occurs")
        alert("Hello")
    },[])
    return (
        <>
            <h5 className="text-danger fs-5 bold"> UseCallbackDemo </h5>
            <button className='btn btn-warning' onClick={show}>Show</button>
        </>
    )
}

export default UseCallbackDemo