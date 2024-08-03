// src/redux/rootReducer.js
import { combineReducers } from "redux";
import userReducer from "./reducers/userReducer";
import loginReducer from "./reducers/loginReducer";
import recipeReducer from "./reducers/recipeListReducer";
import searchRecipeReducer from "./reducers/searchRecipeByIngredient";
import favoriteRecipeReducer from "./reducers/favoriteRecipeReducer";
import deleteFavoriteRecipeReducer from "./reducers/deleteFavoriteReducer";
import getAllFavoritesreducer from "./reducers/getAllFavoritesreducer";

const rootReducer = combineReducers({
  user: userReducer,
  login: loginReducer,
  recipeList: recipeReducer,
  searchRecipe: searchRecipeReducer,
  favoriteRecipe: favoriteRecipeReducer,
  deleteFavoriteRecipe: deleteFavoriteRecipeReducer,
  getAllFavorites: getAllFavoritesreducer,
});

export default rootReducer;
