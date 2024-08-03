import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllFavoriteAction } from "../redux/actions/actions";
import FavoriteRecipe from "./FavoriteCard";

const FavoriteList = ({ recipeList, id }) => {
  const dispatch = useDispatch();
  const favoritesList = useSelector(
    (state) => state?.getAllFavorites?.userInfo
  );

  useEffect(() => {
    dispatch(getAllFavoriteAction(id));
  }, []);

  return (
    <div>
      {favoritesList
        ? favoritesList?.map((it) => <FavoriteRecipe favoriteRecipe={it} />)
        : "No Data Found"}
    </div>
  );
};

export default FavoriteList;
