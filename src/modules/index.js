import { combineReducers } from 'redux'
import gnomes from './fetchGnomes/reducer'
import edit from './editGnome/reducer'

export default combineReducers({
  gnomes,
  edit
})
