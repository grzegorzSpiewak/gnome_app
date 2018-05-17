import {
  FETCHING_GNOMES_STARTED,
  FETCHING_GNOMES_SUCCES,
  FETCHING_GNOMES_FAILED,
  FETCHING_GNOMES_END
} from './actions'

const INITIAL_STATE = {
  gnomes: [],
  offset: 0,
  limit: 25,
  isFetching: false,
  stopFetching: false,
  error: false
}

function usersReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case FETCHING_GNOMES_STARTED:
    return {
      ...state,
      isFetching: true
    }
  case FETCHING_GNOMES_SUCCES:
    return {
      ...state,
      gnomes: state.gnomes.concat(action.gnomes.data),
      offset: state.offset += state.limit,
      isFetching: false
    }
  case FETCHING_GNOMES_FAILED:
    return {
      ...state,
      error: true,
      isFetching: false,
    }
  case FETCHING_GNOMES_END:
    return {
      ...state,
      gnomes: [...state.gnomes, action.gnomes.data],
      isFetching: false,
      stopFetching: true,
    }
  default:
    return state
  }
}

export default usersReducer
