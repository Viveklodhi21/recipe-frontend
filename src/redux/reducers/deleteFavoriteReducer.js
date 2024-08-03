import { DELETE_FAVORITE_REPICE_FAIL, DELETE_FAVORITE_REPICE_REQUEST, DELETE_FAVORITE_REPICE_SUCCESS } from "../actions/actions";

  const initialState = {
    loading: false,
    userInfo: null,
    error: null,
  };
  
  const deleteFavoriteRecipeReducer = (state = initialState, action) => {
    switch (action.type) {
      case DELETE_FAVORITE_REPICE_REQUEST:
        return { ...state, loading: true };
      case DELETE_FAVORITE_REPICE_SUCCESS:
        return { ...state, loading: false, userInfo: action.payload };
      case DELETE_FAVORITE_REPICE_FAIL:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default deleteFavoriteRecipeReducer;
  