import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser() {
   try {
      const user = yield axios('https://randomuser.me/api/?page=1&results=20&seed=abc');
      yield put({type: "FETCH", user: user});
    
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* saga() {
  yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* mySaga() {
  yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
}

export default saga;