import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  loginRequest: ['data'],
  loginSuccess: ['payload'],
  loginFailure: null,
  loginAsGuest: null,
})

export const LoginTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: null,
  payload: null,
  error: null,
  asGuest: null
})

/* ------------- Selectors ------------- */

export const LoginSelectors = {
  getData: state => state.data
}

/* ------------- Reducers ------------- */

export const request = (state, { data }) =>
  state.merge({ fetching: true, data, payload: null, asGuest: false })

export const success = (state, action) => {
  const { payload } = action
  return state.merge({ fetching: false, error: null, payload, asGuest: false })
}

export const failure = state =>
  state.merge({ fetching: false, error: true, payload: null, asGuest: false })


export const loginAsGuest = state =>
  state.merge({ fetching: false, error: true, payload: null, asGuest: true })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: request,
  [Types.LOGIN_SUCCESS]: success,
  [Types.LOGIN_FAILURE]: failure,
  [Types.LOGIN_AS_GUEST]: loginAsGuest
})
