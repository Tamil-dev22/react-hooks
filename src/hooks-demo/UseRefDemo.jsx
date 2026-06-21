// useRef stores mutable values and accesses DOM elements.
// Syntax: const ref= useRef();


import React, { useRef } from 'react'

const UseRefDemo = () => {
    const inputRef =  useRef();

  return (
   <>
     <h5 className="text-danger fs-5 bold"> UseRefDemo </h5>
     <input ref={inputRef}/>

     <div className='mt-3'>
      <button className='btn btn-secondary text-bg-white' onClick={()=> inputRef.current.focus()}> Focus</button>

     </div>
   </>
  )
}

export default UseRefDemo