import {
  RECIPE_SEARCH_FAIL,
  RECIPE_SEARCH_REQUEST,
  RECIPE_SEARCH_SUCCESS,
} from "../actions/actions";

const initialState = {
  loading: false,
  userInfo: null,
  error: null,
};

const searchRecipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECIPE_SEARCH_REQUEST:
      return { ...state, loading: true };
    case RECIPE_SEARCH_SUCCESS:
      return { ...state, loading: false, userInfo: action.payload };
    case RECIPE_SEARCH_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default searchRecipeReducer;
