import React from 'react'
import * as gnomeActions from '../../modules/editGnome/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import style from './style.css'
import Logo from '../logo'
import Navigation from '../navigation'
import Avatar from '../avatar'
import Button from '../button'

const Header = (props) => {
  const { selectGnome } = props.gnomeActions
  const gnome = {
    name: 'edit name',
    age: 0,
    id: 0,
    strenght: 0
  }
  return (
    <header className={style.header}>
      <div className={style.wrap}>
        <Logo />
        <Navigation />
        <Button
          anchor='create monster'
          type='button'
          btnStyle='big'
          onClick={ () => selectGnome(gnome) }
        />
        <Avatar />
      </div>
    </header>
  )
}

const mapDispatchToProps = (dispatch) => ({
  gnomeActions: bindActionCreators(gnomeActions, dispatch)
})

export default connect(null, mapDispatchToProps)(Header)
