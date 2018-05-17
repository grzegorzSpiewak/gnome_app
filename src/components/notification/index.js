import React from 'react'
import * as gnomeActions from '../../modules/editGnome/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import style from './style.css'
import AnimatedWrap from '../animatedWrap'

const delay = (func) => {
  setTimeout(func, 5000)
}

const Notification = (props) => {
  const { status, show } = props
  const { closeNotification } = props.gnomeActions

  return (
    <AnimatedWrap
      in={show}
    >
      <section className={style.notification} onLoad={delay(closeNotification)}>
        <div className={status === 'SUCCES' ? style.succes : style.fail }>
          <h1 className={style.header}>
            {
              status === 'SUCCES' ?
                'Gnome was succesfully updated'
              :
                'Something is wrong. Try again later'
            }
          </h1>
        </div>
      </section>
    </AnimatedWrap>
  )
}

const mapDispatchToProps = (dispatch) => ({
  gnomeActions: bindActionCreators(gnomeActions, dispatch)
})

export default connect(null, mapDispatchToProps)(Notification)
