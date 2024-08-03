import { takeLatest, call, put } from "redux-saga/effects";
import { loginUserApi } from "../../services/api";
import {
  LOGIN_USER_FAIL,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
} from "../actions/actions";

function* loginUserSaga(action) {
  try {
    const response = yield call(loginUserApi, action.payload);
    yield put({ type: LOGIN_USER_SUCCESS, payload: response?.data });

    localStorage.setItem("userToken", response?.data?.token);
    localStorage.setItem("userId", response?.data?.userId);
  } catch (error) {
    yield put({
      type: LOGIN_USER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}

export default function* watchLoginUserSaga() {
  yield takeLatest(LOGIN_USER_REQUEST, loginUserSaga);
}
