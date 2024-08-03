import {
  GET_ALL_FAVORITE_REPICE_FAIL,
  GET_ALL_FAVORITE_REPICE_REQUEST,
  GET_ALL_FAVORITE_REPICE_SUCCESS,
} from "../actions/actions";

const initialState = {
  loading: false,
  userInfo: null,
  error: null,
};

const getAllFavoritesreducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_FAVORITE_REPICE_REQUEST:
      return { ...state, loading: true };
    case GET_ALL_FAVORITE_REPICE_SUCCESS:
      return { ...state, loading: false, userInfo: action.payload };
    case GET_ALL_FAVORITE_REPICE_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default getAllFavoritesreducer;
