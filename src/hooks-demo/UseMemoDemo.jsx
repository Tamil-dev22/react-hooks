// useMemo memoizes a value and recalculates only when dependencies change.
// Syntax const value = useMemo(()=>{},[])

import React, { useMemo, useState } from 'react'

const UseMemoDemo = () => {
  const [count, setCount] = useState(0);
  const square = useMemo(() => {
    console.log("squared")
    return count * count
  }, [count])

  return (
    <>
      <h5 className="text-danger fs-5 bold"> UseMemoDemo </h5>
      <p className="badge text-bg-success p-3">Square of {count} is {square}</p>
      <div>
        <button className="btn btn-primary me-2" onClick={() => setCount(count + 1)}> Square</button>
      </div>
    </>
  )
}

export default UseMemoDemo