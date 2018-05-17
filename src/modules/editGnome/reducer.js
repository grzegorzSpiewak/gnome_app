import {
  SELECTED_GNOME,
  SHOW_EDIT_FOR_PROP,
  CLOSE_EDIT,
  PATCH_GNOME_SUCCES,
  PATCH_GNOME_FAIL,
  CLOSE_NOTIFICATION
} from './actions'

const INITIAL_STATE = {
  gnomeToEdit: [],
  showEdit: false,
  showForm: false,
  showNotification: false,
  showFormFor: '',
  patchStatus: '',
}

function patchGnome(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SELECTED_GNOME:
    return {
      ...state,
      gnomeToEdit: action.gnome,
      showEdit: true
    }
  case SHOW_EDIT_FOR_PROP:
    return {
      ...state,
      showForm: true,
      showFormFor: action.prop
    }
  case CLOSE_EDIT:
    return {
      ...state,
      gnomeToEdit: [],
      showEdit: false,
      showForm: false,
      patchStatus: '',
      showFormFor: '',
      showNotification: false
    }
  case PATCH_GNOME_SUCCES:
    return {
      ...state,
      patchStatus: 'SUCCES',
      showForm: false,
      gnomeToEdit: action.gnome,
      showNotification: true
    }
  case PATCH_GNOME_FAIL:
    return {
      ...state,
      patchStatus: 'FAIL',
      showForm: false,
      showNotification: true
    }
  case CLOSE_NOTIFICATION:
    return {
      ...state,
      showNotification: false
    }
  default:
    return state
  }
}

export default patchGnome
