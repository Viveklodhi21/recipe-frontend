import RecipeReviewCard from "./RecipeReviewCard";
import SearchListComponent from "./searchListComponent";

const RecipeList = ({ recipes, searchRecipe, ingredient, handleFavorite, id }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {ingredient
        ? searchRecipe?.map((recipe) => (
            <div key={recipe.id}>
              <SearchListComponent
                recipe={recipe}
                handleFavorite={handleFavorite}
                id={id}
              />
            </div>
          ))
        : recipes?.map((recipe) => (
            <div key={recipe.id}>
              <RecipeReviewCard
                recipe={recipe}
                handleFavorite={handleFavorite}
                id={id}
              />
            </div>
          ))}
    </div>
  );
};

export default RecipeList;
