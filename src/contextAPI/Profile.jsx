import React, { useContext } from 'react'
import { UserContext } from './Dashboard'

const Profile = () => {
const user = useContext(UserContext)
  return (
    <>
{user.name}
    </>
  )
}

export default Profile