import { ApiRequest } from "./request";

export const registerUserApi = async (data) => {
  const config = {
    url: "/api/user/register",
    method: "POST",
    data: data,
  };
  const result = await ApiRequest(config);
  return result;
};

export const loginUserApi = async (data) => {
  const config = {
    url: "/api/user/login",
    method: "POST",
    data: data,
  };
  const result = await ApiRequest(config);
  return result;
};

export const recipeListApi = async (data) => {
  const config = {
    url: "/api/recipes",
    method: "GET",
    data: data,
  };
  const result = await ApiRequest(config);
  return result;
};

export const searchRecipeApi = async (data) => {
  const config = {
    url: `/api/recipes/search?ingredient=${data?.ingredient}`,
    method: "GET",
  };
  const result = await ApiRequest(config);
  return result;
};

export const favoriteRecipeApi = async (data) => {
  const config = {
    url: `/api/recipes/favorite`,
    method: "POST",
    data: data,
  };
  const result = await ApiRequest(config);
  return result;
};

export const deleteFavoriteRecipeApi = async (data) => {
  console.log("dataaaa", data);

  const config = {
    url: `/api/recipes/favorite/${data}`,
    method: "DELETE",
    data: data,
  };
  const result = await ApiRequest(config);
  return result;
};

export const getAllfavoritesApi = async (data) => {
  const config = {
    url: `/api/recipes/allfavorites`,
    method: "POST",
    data: { id: data },
  };
  const result = await ApiRequest(config);
  return result;
};
