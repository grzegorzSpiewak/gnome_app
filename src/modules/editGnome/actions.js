import { patchGnome } from '../../utils/apiHelpers.js'

export const SELECTED_GNOME = 'SELECTED_GNOME'
export const SHOW_EDIT_FOR_PROP = 'SHOW_EDIT_FOR_PROP'
export const CLOSE_EDIT = 'CLOSE_EDIT'
export const PATCH_GNOME_SUCCES = 'PATCH_GNOME_SUCCES'
export const PATCH_GNOME_FAIL = 'PATCH_GNOME_FAIL'
export const CLOSE_NOTIFICATION = 'CLOSE_NOTIFICATION'

export function selectGnome(gnome) {
  return (dispatch) => {
    dispatch({
      type: SELECTED_GNOME,
      gnome
    })
  }
}

export function formShow(prop) {
  return (dispatch) => {
    dispatch({
      type: SHOW_EDIT_FOR_PROP,
      prop
    })
  }
}

export function closeEdit() {
  return (dispatch) => {
    dispatch({
      type: CLOSE_EDIT,
    })
  }
}

export function patchNewGnome(gnome) {
  const { id } = gnome
  console.log(id)
  return (dispatch) => {
    return patchGnome(id, gnome)
    .then(() => {
      dispatch({
        type: PATCH_GNOME_SUCCES,
        gnome
      })
    }).catch(() => {
      dispatch({
        type: PATCH_GNOME_FAIL,
        gnome
      })
    })
  }
}

export function closeNotification() {
  return (dispatch) => {
    dispatch({
      type: CLOSE_NOTIFICATION
    })
  }
}
