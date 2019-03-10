/* ***********************************************************
* A short word on how to use this automagically generated file.
* We're often asked in the ignite gitter channel how to connect
* to a to a third party api, so we thought we'd demonstrate - but
* you should know you can use sagas for other flow control too.
*
* Other points:
*  - You'll need to add this saga to sagas/index.js
*  - This template uses the api declared in sagas/index.js, so
*    you'll need to define a constant in that file.
*************************************************************/

import { call, put } from 'redux-saga/effects'
import LoginActions from '../Redux/LoginRedux'
import BarberActions from '../Redux/BarberRedux'
import { LoginSelectors } from '../Redux/LoginRedux'
import { NavigationActions } from 'react-navigation';

export function * doLogin (api, action) {
  const { data } = action
  const response = yield call(api.loginUser, data)

  if (response.ok) {
    yield put(LoginActions.loginSuccess(response.data))
  } else {
    yield put(LoginActions.loginFailure())
  }
}

export function * doLoginAsGuest (api, action) {
  yield put(BarberActions.getBarbersRequest());
  yield put(NavigationActions.navigate({ routeName: 'ProfilesScreen' }));
}
