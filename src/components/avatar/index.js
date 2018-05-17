import React from 'react'
import style from './style.css'
import AvatarSrc from '../../assets/avatar.png'

const Avatar = props => (
  <div className={style.avatar}>
    <img src={AvatarSrc} className={style.img} alt="user-avatar"/>
    <div className={style.details}>
      <h1 className={style.heading}>User name</h1>
      <h2 className={style.subheading}>User role</h2>
    </div>
  </div>
)

export default Avatar
