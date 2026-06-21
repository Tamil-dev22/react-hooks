import React, { useEffect, useInsertionEffect, useLayoutEffect } from 'react'

export const Effect = () => {
      useInsertionEffect(() => {
    console.log(
      "1. useInsertionEffect"
    );
  }, []);

  useLayoutEffect(() => {
    console.log(
      "2. useLayoutEffect"
    );
  }, []);

  useEffect(() => {
    console.log(
      "3. useEffect"
    );
  }, []);
  return (
    <div>Effect</div>
  )
}
