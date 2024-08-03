import { takeLatest, call, put } from "redux-saga/effects";
import {  searchRecipeApi } from "../../services/api";
import { RECIPE_SEARCH_FAIL, RECIPE_SEARCH_REQUEST, RECIPE_SEARCH_SUCCESS } from "../actions/actions";

function* searchRecipeSaga(action) {
  try {
    const response = yield call(searchRecipeApi, action.payload);
    yield put({ type: RECIPE_SEARCH_SUCCESS, payload: response?.data });
  } catch (error) {
    yield put({
      type: RECIPE_SEARCH_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}

export default function* watchSearchRecipeSaga() {
  yield takeLatest(RECIPE_SEARCH_REQUEST, searchRecipeSaga);
}
