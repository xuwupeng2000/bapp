import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getBookingsRequest: ['data'],
  getBookingsSuccess: ['payload'],
  getBookingsFailure: null,
  addBookingRequest: ['data'],
  addBookingSuccess: ['payload'],
  addBookingFailure: null
})

export const BookingTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: [],
  fetching: null,
  payload: null,
  error: null
})

/* ------------- Selectors ------------- */

export const BookingSelectors = {
  getData: state => state.data
}

/* ------------- Reducers ------------- */

export const getBookingsRequest = (state, { data }) =>
  state.merge({ fetching: true, data, payload: null })

export const getBookingsSuccess = (state, action) => {
  const { payload } = action
  return state.merge({ fetching: false, error: null, payload })
}

export const getBookingsFailure = state =>
  state.merge({ fetching: false, error: true, payload: null })

export const addBookingRequest = (state, { data }) =>
  state.merge({ fetching: true, data, payload: null })

export const addBookingSuccess = (state, action) => {
  const { payload } = action
  return state.merge({ fetching: false, error: null, payload })
}

export const addBookingsFailure = state =>
  state.merge({ fetching: false, error: true, payload: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_BOOKINGS_REQUEST]: getBookingsRequest,
  [Types.GET_BOOKINGS_SUCCESS]: getBookingsSuccess,
  [Types.GET_BOOKINGS_FAILURE]: getBookingsFailure,
  [Types.ADD_BOOKING_REQUEST]: addBookingRequest,
  [Types.ADD_BOOKING_SUCCESS]: addBookingSuccess,
  [Types.ADD_BOOKING_FAILURE]: addBookingsFailure
})
