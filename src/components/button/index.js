import React from 'react'
import PropTypes from 'prop-types'
import style from './style.css'

const Button = (props: Props) => (
  props.btnStyle === "big" ?
    <button
      className={style.btnBig}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.disabled ? 'finish edit' : props.anchor }
    </button>
  :
    <button
      className={props.disabled ? style.btnSmallDisabled : style.btnSmall}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.disabled ? 'finish edit' : props.anchor }
    </button>
)

Button.propTypes = {
  anchor: PropTypes.string.isRequired,
  btnStyle: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

export default Button
