import {
  LOGIN_USER_FAIL,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
} from "../actions/actions";

const initialState = {
  loading: false,
  userInfo: null,
  error: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return { ...state, loading: true };
    case LOGIN_USER_SUCCESS:
      return { ...state, loading: false, userInfo: action.payload };
    case LOGIN_USER_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default loginReducer;
