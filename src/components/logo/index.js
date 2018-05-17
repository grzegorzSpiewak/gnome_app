import React from 'react'
import style from './style.css'
import LogoSrc from '../../assets/logo@2x.png'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../modules/editGnome/actions'

const Logo = (props) => {
  const { closeEdit } = props.gnomeActions
  return (
    <div className={style.logo} onClick={() => closeEdit()}>
      <img src={LogoSrc} className={style.img} alt="logo"/>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  gnomeActions: bindActionCreators(actions, dispatch)
})

export default connect(null, mapDispatchToProps)(Logo)
