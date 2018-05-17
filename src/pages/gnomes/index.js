import React from 'react'
import { connect } from 'react-redux'
import GnomesList from '../../components/gnomeList'
import GnomeEdit from '../../components/gnomeEdit'
import Notification from '../../components/notification'
import style from './style.css'

const Gnomes = (props) => {
  const { showEdit, showNotification, patchStatus } = props.gnomeData

  if (showEdit) {
    return (
      <section className={style.page}>
        <GnomeEdit />
        <Notification
          show={showNotification}
          status={patchStatus}
        />
      </section>
    )
  }

  return (
    <section className={style.page}>
      <GnomesList />
    </section>
  )
}

const mapStateToProps = state => ({
  gnomeData: state.edit
})

export default connect(mapStateToProps)(Gnomes)
