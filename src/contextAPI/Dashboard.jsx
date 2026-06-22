import React, { createContext } from 'react'
import Profile from './Profile';
import { Outlet } from 'react-router-dom';

export const UserContext = createContext();

const Dashboard = () => {
    const user ={
        name:"Tamilarasan PR",
        role:"Full stack developer"
    }
  return (
    <>
    {/* <UserContext.Provider value={user}> */}
       asdaskdlasdklasdlasndlkasnd
    {/* </UserContext.Provider> */}
    <Outlet/>
    </>
  )
}

export default Dashboard