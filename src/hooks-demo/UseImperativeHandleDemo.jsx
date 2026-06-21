// useImperativeHandle allows a parent component to access custom methods from a child component using refs.
//syntax: useImperativeHandle (ref,()=>({ methodName(){}})

import React, { forwardRef, useImperativeHandle, useRef } from 'react'
const Child = forwardRef((props, ref) => {
    const inputRef = useRef();
    useImperativeHandle(ref, () => ({
        focusInput() {
            inputRef.current.focus();
        }

    }))

    return <input ref={inputRef} />
});

const UseImperativeHandleDemo = () => {

    const childRef = useRef();

    return (
        <>
            <h5 className="text-danger fs-5 bold"> UseImperativeHandleDemo </h5>
            <div>
            <Child ref={childRef} />

            </div>

            <div className='mt-2 d-inline-block'>
                <button className="btn text-bg-primary" onClick={() => { childRef.current.focusInput() }}> Child Focus</button>
            </div>
        </>
    )
}

export default UseImperativeHandleDemo