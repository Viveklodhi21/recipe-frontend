// src/redux/rootSaga.js
import { all } from "redux-saga/effects";
import watchUserSaga from "./sagas/userSaga";
import watchLoginUserSaga from "./sagas/loginSaga";
import watchRecipeListSaga from "./sagas/recipeListSaga";
import watchSearchRecipeSaga from "./sagas/searchRecipeByIngredient";
import watchfavoriteRecipeSaga from "./sagas/favoriteRecipeSaga";
import watchdeleteFavoriteRecipeSaga from "./sagas/deleteFavoriteSaga";
import watchgetAllFavoritesSaga from "./sagas/getAllFavoritesSaga";

export default function* rootSaga() {
  yield all([
    watchUserSaga(),
    watchLoginUserSaga(),
    watchRecipeListSaga(),
    watchSearchRecipeSaga(),
    watchfavoriteRecipeSaga(),
    watchdeleteFavoriteRecipeSaga(),
    watchgetAllFavoritesSaga(),
  ]);
}
