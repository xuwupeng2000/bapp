import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getBarbersRequest: null,
  getBarbersSuccess: ['payload'],
  getBarbersFailure: null
})

export const BarberTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: null,
  error: null
})

/* ------------- Selectors ------------- */

export const BarberSelectors = {
  getData: state => state.data
}

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, {}) =>
  state.merge({ fetching: true, data: null })

// successful api lookup
export const success = (state, action) => {
  const { payload: { data } } = action;
  return state.merge({ fetching: false, error: null, data })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_BARBERS_REQUEST]: request,
  [Types.GET_BARBERS_SUCCESS]: success,
  [Types.GET_BARBERS_FAILURE]: failure
})
