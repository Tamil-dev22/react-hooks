import React, { useRef, useState } from 'react'

const Form = () => {
  // Controlled Component
  const [name, setName] = useState("");
  const [controlledError, setControlledError] = useState("");

  // Uncontrolled Component
  const inputRef = useRef();
  const [uncontrolledError, setUncontrolledError] = useState("");

  // Controlled Submit
  const handleControlledSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      setControlledError("Name is required");
      return;
    }

    setControlledError("");
    console.log("Controlled:", name);
  };

  // Uncontrolled Submit
  const handleUncontrolledSubmit = (e) => {
    e.preventDefault();

    if (inputRef.current.value.trim() === "") {
      setUncontrolledError("Name is required");
      return;
    }

    setUncontrolledError("");
    console.log("Uncontrolled:", inputRef.current.value);
  };

  return (
    <>
      <h2>Controlled Form</h2>

      <form onSubmit={handleControlledSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
        />

        {controlledError && <p>{controlledError}</p>}

        <button type="submit">Submit</button>
      </form>

      <hr />

      <h2>Uncontrolled Form</h2>

      <form onSubmit={handleUncontrolledSubmit}>
        <input
          type="text"
          ref={inputRef}
          placeholder="Enter Name"
        />

        {uncontrolledError && <p>{uncontrolledError}</p>}

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;