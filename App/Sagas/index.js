import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { BarberTypes } from "../Redux/BarberRedux";
import { BookingTypes } from "../Redux/BookingRedux";
import { RegistrationTypes } from "../Redux/RegistrationRedux";
import { LoginTypes } from "../Redux/LoginRedux";

/* ------------- Sagas ------------- */
import { doLogin, doLoginAsGuest } from "./LoginSagas";
import { doRegistration } from "./RegistrationSagas";
import { getBookings, addBooking, getBarbers} from "./BookingSagas";

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = API.create();

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    takeLatest(LoginTypes.LOGIN_REQUEST, doLogin, api),
    takeLatest(LoginTypes.LOGIN_AS_GUEST, doLoginAsGuest, api),
    takeLatest(BarberTypes.GET_BARBERS_REQUEST, getBarbers, api),
  ])
}
