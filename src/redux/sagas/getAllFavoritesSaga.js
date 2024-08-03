import { takeLatest, call, put } from "redux-saga/effects";
import { getAllfavoritesApi } from "../../services/api";
import {
  GET_ALL_FAVORITE_REPICE_FAIL,
  GET_ALL_FAVORITE_REPICE_REQUEST,
  GET_ALL_FAVORITE_REPICE_SUCCESS,
} from "../actions/actions";

function* getAllFavoritesSaga(action) {
  try {
    const response = yield call(getAllfavoritesApi, action.payload);
    yield put({
      type: GET_ALL_FAVORITE_REPICE_SUCCESS,
      payload: response?.data,
    });
  } catch (error) {
    yield put({
      type: GET_ALL_FAVORITE_REPICE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}

export default function* watchgetAllFavoritesSaga() {
  yield takeLatest(GET_ALL_FAVORITE_REPICE_REQUEST, getAllFavoritesSaga);
}
