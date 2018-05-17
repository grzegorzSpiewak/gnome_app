import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import * as actions from '../../modules/editGnome/actions'
import Button from '../button'
import style from './style.css'

const Form = (props) => {
  const { prop, data, onChange, onSubmit, editedGnome, editedGnomeActions } = props
  const { showForm, showFormFor } = editedGnome
  const { formShow } = editedGnomeActions
  
  return (
    <div role="group" className={style.field}>
      <label className={style.label}>Gnome {prop}: {data}</label>
      {
        showForm && showFormFor === prop ?
          <form
            className={style.form}
            onSubmit={onSubmit}
            >
            <input
              className={style.textInput}
              name={prop}
              type={typeof(data) === 'number' ? 'Number' : 'Text' }
              onChange={onChange}
              required
              placeholder={
                typeof(data) === 'number' ? 'Number is required' : 'New name'
              }
            />
            <Button
              type='submit'
              anchor='save'
            />
          </form>
        :
          <Button
            anchor="edit"
            type='button'
            onClick={() => formShow(prop)}
            disabled={showForm ? true : false}
          />
      }
      </div>
  )
}

const mapStateToProps = state => ({
  editedGnome: state.edit
})

const mapDispatchToProps = dispatch => ({
  editedGnomeActions: bindActionCreators(actions, dispatch)
})

Form.propTypes = {
  prop: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  editedGnome: PropTypes.shape({
    showForm: PropTypes.bool.isRequired,
    showFormFor: PropTypes.string.isRequired,
  }).isRequired,
  editedGnomeActions:  PropTypes.shape({
    formShow: PropTypes.func.isRequired
  }).isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
