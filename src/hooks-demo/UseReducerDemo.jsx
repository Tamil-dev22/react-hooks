// useReducer manages complex state using actions and a reducer function.
//syntax: const [state,dispatch] =  userReducer(reducer, initialState);

import React, { useReducer } from 'react'
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {
                count: state.count + 1
            }
        default:
            return state;
    }

}
const UseReducerDemo = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 })
    
    return (
        <>
            <h5 className="text-danger fs-5 bold"> UseReducerDemo </h5>
            <div className='badge text-bg-warning p-2'> Count value {state.count}</div>
            <div className='mt-2'>
                <button className='btn btn-success' onClick={() => dispatch({ type: "increment" })}> Click Count</button>

            </div>
        </>
    )
}

export default UseReducerDemo