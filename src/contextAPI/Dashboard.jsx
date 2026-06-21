import React, { createContext } from 'react'
import Profile from './Profile';

export const UserContext = createContext();

const Dashboard = () => {
    const user ={
        name:"Tamilarasan PR",
        role:"Full stack developer"
    }
  return (
    <>
    <UserContext.Provider value={user}>
        <Profile/>
    </UserContext.Provider>
    
    </>
  )
}

export default Dashboard