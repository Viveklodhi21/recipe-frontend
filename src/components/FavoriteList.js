import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getAllFavoriteAction } from "../redux/actions/actions";
import FavoriteRecipe from "./FavoriteCard";
// import FavoriteRecipe from "./favoriteCard";

const FavoriteList = ({ recipeList, id }) => {
  const dispatch = useDispatch();
  const favoritesList = useSelector(
    (state) => state?.getAllFavorites?.userInfo
  );
  console.log("favoritesList", favoritesList);

  useEffect(() => {
    dispatch(getAllFavoriteAction(id));
  }, []);
  console.log("recipeList", recipeList);

  return (
    <div>
      {favoritesList &&
        favoritesList?.map((it) => <FavoriteRecipe favoriteRecipe={it} />)}
    </div>
  );
};

export default FavoriteList;
