import {
  RECIPE_LIST_FAIL,
  RECIPE_LIST_REQUEST,
  RECIPE_LIST_SUCCESS,
} from "../actions/actions";

const initialState = {
  loading: false,
  userInfo: null,
  error: null,
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECIPE_LIST_REQUEST:
      return { ...state, loading: true };
    case RECIPE_LIST_SUCCESS:
      return { ...state, loading: false, userInfo: action.payload };
    case RECIPE_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default recipeReducer;
