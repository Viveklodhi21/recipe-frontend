import { takeLatest, call, put } from "redux-saga/effects";
import { favoriteRecipeApi } from "../../services/api";
import {
  FAVORITE_REPICE_FAIL,
  FAVORITE_REPICE_REQUEST,
  FAVORITE_REPICE_SUCCESS,
} from "../actions/actions";

function* favoriteRecipeSaga(action) {
  try {
    const response = yield call(favoriteRecipeApi, action.payload);
    yield put({ type: FAVORITE_REPICE_SUCCESS, payload: response?.data });
  } catch (error) {
    yield put({
      type: FAVORITE_REPICE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}

export default function* watchfavoriteRecipeSaga() {
  yield takeLatest(FAVORITE_REPICE_REQUEST, favoriteRecipeSaga);
}
