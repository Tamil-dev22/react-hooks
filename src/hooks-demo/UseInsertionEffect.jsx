//useInsertionEffect runs before DOM mutations. Mostly used by CSS-in-JS libraries.
//syntax: useInsertionEffect(()=>{},[])
import React, { useInsertionEffect } from 'react'

const UseInsertionEffect = () => {
    useInsertionEffect(() => {

        console.log("Style rendered");

    }, []);

    return (
        <div>UseInsertionEffect</div>
    )
}

export default UseInsertionEffect