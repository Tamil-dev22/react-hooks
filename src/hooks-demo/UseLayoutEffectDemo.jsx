// useLayoutEffect runs synchronously after DOM updates but before browser paint.
// syntax: uselayoutEffect(()=>{},[])
import React, { useLayoutEffect } from 'react'

const UseLayoutEffectDemo = () => {
    useLayoutEffect(()=>{
        console.log("Before paint")
    },[])
    
  return (
    <div>UseLayoutEffectDemo</div>
  )
}

export default UseLayoutEffectDemo