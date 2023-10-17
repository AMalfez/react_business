import React from 'react'
import '../css/UserInfo.css'
import { useAuth0 } from '@auth0/auth0-react'

function UserInfo() {
  const {user,isAuthenticated} = useAuth0();
  
  return (
    <div className='userInfo'>
      <div className='Avatar'>
        {!isAuthenticated? (<p>Avatar</p>):(<img src={user.picture} alt="user picture"/>)}
      </div>
      <div className='user-name'>{!isAuthenticated?("Username") :(user.given_name +" "+user.family_name)}</div>
      <div className='user-email'>{!isAuthenticated?"user email":user.email}</div>
    </div>
  )
}

export default UserInfo