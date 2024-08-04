import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import SearchBar from "../components/searchBar";
import RecipeList from "../components/recipeList";
import {
  favoriteRecipeAction,
  recipeListAction,
  recipeSearchAction,
} from "../redux/actions/actions";
import { useNavigate } from "react-router";
import FavoriteList from "../components/FavoriteList";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [ingredient, setIngredient] = useState("");
  const [id, setId] = useState("");
  const recipeList = useSelector((state) => state?.recipeList?.userInfo);
  const searchRecipe = useSelector((state) => state?.searchRecipe?.userInfo);
  const FavoriteRecipies = useSelector(
    (state) => state?.getAllFavorites?.userInfo
  );

  const [favoritePage, setFavoritePage] = useState(false);

  const toggleFavorite = () => {
    setFavoritePage(!favoritePage);
  };

  useEffect(() => {
    dispatch(recipeListAction());
    setId(localStorage.getItem("userId"));
  }, []);

  const handleSearch = async (ingredient) => {
    try {
      dispatch(recipeSearchAction({ ingredient }));
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };
  const handleFavorite = (data) => {
    dispatch(favoriteRecipeAction(data));
  };
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "0 150px",
          width: "800px",
        }}
      >
        <h1>Recipe Finder</h1>
        <button onClick={() => handleLogout()}>Sign Out</button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "0 150px",
          width: "400px",
        }}
      >
        <SearchBar
          onSearch={handleSearch}
          ingredient={ingredient}
          setIngredient={setIngredient}
        />
        <button onClick={() => toggleFavorite()}>
          {!favoritePage ? "Favorites" : "All Recipes"}
        </button>
      </div>
      {favoritePage ? (
        <FavoriteList FavoriteRecipies={FavoriteRecipies} id={id} />
      ) : recipeList?.length && searchRecipe?.length ? (
        <RecipeList
          recipes={recipeList}
          searchRecipe={searchRecipe}
          ingredient={ingredient}
          handleFavorite={handleFavorite}
          id={id}
        />
      ) : (
        "No Data Found!"
      )}
    </div>
  );
};

export default Home;
