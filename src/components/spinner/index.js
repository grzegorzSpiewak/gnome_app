import React from 'react'
import style from './style.css'
import SpinnerSrc from '../../assets/spinner.gif'

const Spinner = props => (
  <div className={style.wrap}>
    <img src={SpinnerSrc} className={style.img} alt="spinner-icon"/>
  </div>
)

export default Spinner
