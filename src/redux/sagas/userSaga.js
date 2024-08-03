// src/redux/sagas/userSaga.js
import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
} from "../actions/actions";
import { registerUserApi } from "../../services/api";

function* registerUserSaga(action) {
  try {
    const response = yield call(registerUserApi, action.payload);
    yield put({ type: REGISTER_USER_SUCCESS, payload: response?.data });
  } catch (error) {
    yield put({
      type: REGISTER_USER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}

export default function* watchUserSaga() {
  yield takeLatest(REGISTER_USER_REQUEST, registerUserSaga);
}
