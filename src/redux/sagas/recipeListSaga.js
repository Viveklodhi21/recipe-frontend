import { takeLatest, call, put } from "redux-saga/effects";
import { recipeListApi } from "../../services/api";
import {
  RECIPE_LIST_REQUEST,
  RECIPE_LIST_SUCCESS,
  RECIPE_LIST_FAIL,
} from "../actions/actions";

function* recipeListSaga(action) {
  try {
    const response = yield call(recipeListApi, action.payload);
    yield put({ type: RECIPE_LIST_SUCCESS, payload: response?.data });
  } catch (error) {
    yield put({
      type: RECIPE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}

export default function* watchRecipeListSaga() {
  yield takeLatest(RECIPE_LIST_REQUEST, recipeListSaga);
}
