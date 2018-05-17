import React from 'react'
import * as gnomeActions from '../../modules/editGnome/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import style from './style.css'
import LogoSrc from '../../assets/gnome.png'
import EnergyBar from '../energyBar'
/**
 * Class GnomeListItem component
 * For gnome list (displays the information about fetched gnomes)
 */
const GnomeListItem = (props) =>  {
  const { selectGnome } = props.gnomeActions
  const { gnome } = props
  const { name, age, strenght } = gnome

  return (
    <div
      className={style.item}
      onClick={ () => selectGnome(gnome) }
    >
      <div className={style.logo}>
        <img src={LogoSrc} className={style.img} alt="logo-gnome"/>
      </div>
      <div className={style.details}>
        <h1 className={style.heading}>{name}</h1>
        <h2 className={style.subheading}>Age: {age}</h2>
      </div>
      <EnergyBar strenght={strenght} />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  gnomeActions: bindActionCreators(gnomeActions, dispatch)
})

export default connect(null, mapDispatchToProps)(GnomeListItem)
