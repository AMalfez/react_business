import React from 'react'
import '../css/UserInfo.css'

function UserInfo() {
  return (
    <div className='userInfo'>
      <div className='Avatar'><p>Avatar</p></div>
      <div className='user-name'>Username</div>
      <div className='user-email'>username1234@gmail.com</div>
    </div>
  )
}

export default UserInfo