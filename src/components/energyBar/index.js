import React from 'react'
import style from './style.css'
import PropTypes from 'prop-types'

const EnergyBar = props => (
  <div className={style.wrap}>
    <div className={style.progress}>
      <div className={style.fill}
        style={{width: props.strenght + '%'}}
      />
    </div>
    <div className={style.label}>
      <h1 className={style.heading}>{props.strenght}/100</h1>
      <h2 className={style.subheading}>strnegth</h2>
    </div>
  </div>
)

EnergyBar.propTypes = {
  strenght: PropTypes.number.isRequired,
}

export default EnergyBar
