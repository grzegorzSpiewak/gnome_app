import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import * as actions from '../../modules/editGnome/actions'
import AnimatedWrap from '../animatedWrap'
import Button from '../button'
import Form from '../form'
import style from './style.css'
/**
 * Class GnomesEdit component
 * Allows to change selected gnome properties(age, name etc)
 */
class GnomeEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.editedGnome.gnomeToEdit.name,
      age: this.props.editedGnome.gnomeToEdit.age,
      strenght: this.props.editedGnome.gnomeToEdit.strenght,
      id: this.props.editedGnome.gnomeToEdit.id,
      show: false
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  componentDidMount() {
    this.toggleShow()
  }

  componentWillUnmount() {
    this.toggleShow()
  }

  onSubmit(e, prop) {
    const { patchNewGnome } = this.props.editedGnomeActions
    const newGnome = this.editedGnome()
    e.preventDefault()
    patchNewGnome(newGnome)
  }

  handleInput(e) {
    let newState = []
    newState[e.target.name] = e.target.value
    this.setState(newState)
  }

  editedGnome() {
    const { name, age, strenght, id } = this.state
    let editedGnome = {
      name: name,
      age: parseInt(age, 10),
      strenght: parseInt(strenght, 10),
      id: id
    }
    return editedGnome
  }

  toggleShow() {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    const { editedGnome, editedGnomeActions } = this.props
    const { show } = this.state
    const { gnomeToEdit } = editedGnome
    const { closeEdit } = editedGnomeActions

    if (gnomeToEdit.length > 0) {
      return null
    }

    return (
      <AnimatedWrap in={show}>
        <div className={style.wrap}>
          <div className={style.top}>
            <div className={style.logo} />
          </div>
          <div className={style.formWrap}>
          <legend className={style.legend}>Gnome Details</legend>
            {
              Object.keys(gnomeToEdit).map((prop) => {
                if(prop === 'id') {
                  return null
                }
                return (
                  <Form
                    key={prop}
                    prop={prop}
                    data={gnomeToEdit[prop]}
                    onSubmit={this.onSubmit}
                    onChange={this.handleInput}
                  />
                )
              })
            }
          </div>
          <Button
            anchor="skip"
            type='button'
            onClick={() => closeEdit()}
          />
        </div>
      </AnimatedWrap>
    )
  }
}

const mapStateToProps = state => ({
  editedGnome: state.edit
})

const mapDispatchToProps = dispatch => ({
  editedGnomeActions: bindActionCreators(actions, dispatch)
})

GnomeEdit.propTypes = {
  editedGnome: PropTypes.shape({
    gnomeToEdit: PropTypes.shape({
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      strenght: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  editedGnomeActions:  PropTypes.shape({
    closeEdit: PropTypes.func.isRequired, /** function to close edit without saving */
    patchNewGnome: PropTypes.func.isRequired /** patches the changess to server */
  }).isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(GnomeEdit)
