export const REGISTER_USER_REQUEST = 'REGISTER_USER_REQUEST';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAIL = 'REGISTER_USER_FAIL';

export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL';

export const RECIPE_LIST_REQUEST = 'RECIPE_LIST_REQUEST';
export const RECIPE_LIST_SUCCESS = 'RECIPE_LIST_SUCCESS';
export const RECIPE_LIST_FAIL = 'RECIPE_LIST_FAIL';

export const RECIPE_SEARCH_REQUEST = 'RECIPE_SEARCH_REQUEST';
export const RECIPE_SEARCH_SUCCESS = 'RECIPE_SEARCH_SUCCESS';
export const RECIPE_SEARCH_FAIL = 'RECIPE_SEARCH_FAIL';

export const FAVORITE_REPICE_REQUEST = 'FAVORITE_REPICE_REQUEST';
export const FAVORITE_REPICE_SUCCESS = 'FAVORITE_REPICE_SUCCESS';
export const FAVORITE_REPICE_FAIL = 'FAVORITE_REPICE_FAIL';

export const GET_ALL_FAVORITE_REPICE_REQUEST = 'GET_ALL_FAVORITE_REPICE_REQUEST';
export const GET_ALL_FAVORITE_REPICE_SUCCESS = 'GET_ALL_FAVORITE_REPICE_SUCCESS';
export const GET_ALL_FAVORITE_REPICE_FAIL = 'GET_ALL_FAVORITE_REPICE_FAIL';

export const DELETE_FAVORITE_REPICE_REQUEST = 'DELETE_FAVORITE_REPICE_REQUEST';
export const DELETE_FAVORITE_REPICE_SUCCESS = 'DELETE_FAVORITE_REPICE_SUCCESS';
export const DELETE_FAVORITE_REPICE_FAIL = 'DELETE_FAVORITE_REPICE_FAIL';


export const registerUserAction = (data) => ({
    type: REGISTER_USER_REQUEST,
    payload: data,
});

export const loginUserAction = (data) => ({
    type: LOGIN_USER_REQUEST,
    payload: data,
});


export const recipeListAction = (data) => ({
    type: RECIPE_LIST_REQUEST,
    payload: data,
});


export const recipeSearchAction = (data) => ({
    type: RECIPE_SEARCH_REQUEST,
    payload: data,
});

export const favoriteRecipeAction = (data) => ({
    type: FAVORITE_REPICE_REQUEST,
    payload: data,
});

export const deleteFavoriteRecipeAction = (data) => ({
    type: DELETE_FAVORITE_REPICE_REQUEST,
    payload: data,
});

export const getAllFavoriteAction = (data) => ({
    type: GET_ALL_FAVORITE_REPICE_REQUEST,
    payload: data,
});

