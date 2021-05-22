import { AUTH_LOGOUT, AUTH_SUCCESS, AUTH_ERROR, RESET_AUTH_ERROR } from "../actions/actionTypes";

const initialState = {
    token: null,
    errorMessage: null
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case AUTH_SUCCESS: 
            return {
                ...state, token: action.token
            }
        case AUTH_LOGOUT: 
            return {
                ...state, token: null
            }
        case AUTH_ERROR: {
            return {
                ...state, errorMessage: action.error
            }
        }
        case RESET_AUTH_ERROR: {
            return {
                ...state, errorMessage: null
            }
        }
        default:
            return state
    }
}