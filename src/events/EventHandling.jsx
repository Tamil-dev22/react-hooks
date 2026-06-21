//most important events onClick,onChange,onSubmit,onKeyDown ,e.preventDefault(),e.stopPropagation()

import React, { useState } from 'react'

const EventHandling = () => {
    const handleClick = () => {
        alert("Button clicked ")
    }
    const handleSubmit = (e) => {
        e.preventDefault()//prevent default
        alert("Form submitted")
    }
    const handleKeydown = (e) => {
        console.log(e.key)
    }
    const parentClick = () => {
        console.log("Parent Click")
    }

    const childClick = (e) => {
        e.stopPropagation()
        console.log("Child Click")
    }
    const [name, setName] = useState("");

    return (
        <>
            <div> Event handling</div>
            <div>
                <h3>
                    onClick
                </h3>
                <button className='btn btn-success' onClick={() => { handleClick() }}>OnClick</button>
            </div>
            <h3 className='mt-3'>
                onChange
            </h3>
            <input value={name} onChange={(e) => setName(e.target.value)} />

            <h2>{name}</h2>
            <div>
                <h3 className='mt-3'>
                    onSubmit
                </h3>
                <form onSubmit={handleSubmit}>
                    <button type='submit' className='btn btn-primary'>Form Submit</button>
                </form>
            </div>

            <div>
                <h3 className='mt-3'>
                    onkeyDown
                </h3>
                <input onKeyDown={handleKeydown} />
            </div>

            <div className='mt-2'>
                <div className="btn btn-primary" onClick={parentClick}>

                    <button className="btn btn-success" onClick={childClick}>
                        Child 
                    </button>
                  
                </div>

            </div>

        </>
    )
}

export default EventHandling