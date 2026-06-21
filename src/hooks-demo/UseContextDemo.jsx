//Syntax: const value = useContext(Context);
// useContext is used to consume Context data without prop drilling.

import React, { createContext, useContext } from 'react'

const userContext = createContext("Tamilarasan");

function Child() {
    const user = useContext(userContext)

    return <h1 className='text-success fs-2'>{user}</h1>
}

const UseContextDemo = () => {
    return (
        <>
            <h5 className="text-danger fs-5 bold"> UseContextDemo </h5>
            <Child />
        </>
    )
}

export default UseContextDemo