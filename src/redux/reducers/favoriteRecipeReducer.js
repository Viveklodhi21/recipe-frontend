import {
  FAVORITE_REPICE_FAIL,
  FAVORITE_REPICE_REQUEST,
  FAVORITE_REPICE_SUCCESS,
} from "../actions/actions";

const initialState = {
  loading: false,
  userInfo: null,
  error: null,
};

const favoriteRecipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FAVORITE_REPICE_REQUEST:
      return { ...state, loading: true };
    case FAVORITE_REPICE_SUCCESS:
      return { ...state, loading: false, userInfo: action.payload };
    case FAVORITE_REPICE_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default favoriteRecipeReducer;
