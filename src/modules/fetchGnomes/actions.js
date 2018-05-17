import { getGnomes } from '../../utils/apiHelpers.js'

export const FETCHING_GNOMES_STARTED = 'FETCHING_GNOMES_STARTED'
export const FETCHING_GNOMES_SUCCES = 'FETCHING_GNOMES_SUCCES'
export const FETCHING_GNOMES_FAILED = 'FETCHING_GNOMES_FAILED'
export const FETCHING_GNOMES_END = 'FETCHING_GNOMES_END'

export function fetchGnomes(offset, limit) {
  const params = {
    limit: limit,
    offset: offset
  }
  return (dispatch) => {
    return getGnomes(params)
      .then((gnomes) => {
      dispatch({
        type: FETCHING_GNOMES_STARTED,
      })
      if (gnomes.data.length < limit) {
        dispatch({
          type: FETCHING_GNOMES_END,
          gnomes
        })
      } else {
        dispatch({
          type: FETCHING_GNOMES_SUCCES,
          gnomes
        })
      }
    }).catch((error) => {
      dispatch({
        type: FETCHING_GNOMES_FAILED,
        error
      })
    })
  }
}
