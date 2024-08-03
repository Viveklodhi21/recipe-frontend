import { REGISTER_USER_FAIL, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "../actions/actions";

const initialState = {
    loading: false,
    userInfo: null,
    error: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USER_REQUEST:
            return { ...state, loading: true };
        case REGISTER_USER_SUCCESS:
            return { ...state, loading: false, userInfo: action.payload };
        case REGISTER_USER_FAIL:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default userReducer;
