import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
     <>
      <NavLink to="/">Home</NavLink>
      <br />

      <NavLink to="/about">About</NavLink>
      <br />

      <NavLink to="/contact">Contact</NavLink>
      <br />
      <NavLink to="/user">UserList</NavLink>
      <br />
      <NavLink to="/user/1">Userid</NavLink>
      <br/>
      <NavLink to="/dashboard">Dashboard</NavLink>
    </>
  )
}

export default Navbar