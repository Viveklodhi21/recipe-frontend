import { takeLatest, call, put } from "redux-saga/effects";
import { favoriteRecipeApi } from "../../services/api";
import {
  DELETE_FAVORITE_REPICE_FAIL,
  DELETE_FAVORITE_REPICE_REQUEST,
  DELETE_FAVORITE_REPICE_SUCCESS,
} from "../actions/actions";

function* deleteFavoriteRecipeSaga(action) {
  try {
    const response = yield call(favoriteRecipeApi, action.payload);
    yield put({
      type: DELETE_FAVORITE_REPICE_SUCCESS,
      payload: response?.data,
    });
  } catch (error) {
    yield put({
      type: DELETE_FAVORITE_REPICE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}

export default function* watchdeleteFavoriteRecipeSaga() {
  yield takeLatest(DELETE_FAVORITE_REPICE_REQUEST, deleteFavoriteRecipeSaga);
}
