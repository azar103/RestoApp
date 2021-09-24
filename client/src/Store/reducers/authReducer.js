import { AUTH_ERROR, GET_AUTH_ME, IS_LOADING, LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT, NOT_LOADING, REGISTER_ERROR, REGISTER_SUCCESS } from '../actions/actionTypes';
const initState = {
    isAuth: false,
    isLoading: false,
    user: null,
    token: localStorage.getItem('token')
}

const authReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuth: true,
                isLoading: false,
                ...payload,
                token: localStorage.setItem('token', payload.token)
            }
        case IS_LOADING: {
            return {
                ...state,
                isLoading: true
            }
        }
        case NOT_LOADING: {
            return {
                ...state,
                isLoading: false
            }
        }    
        case GET_AUTH_ME:
            return {
                ...state,
                isAuth: true,
                isLoading: false,
                ...payload
            }
        case LOGOUT:
        case LOGIN_ERROR:
        case REGISTER_ERROR:
        case AUTH_ERROR:
            localStorage.removeItem('token')
            return {
                ...state,
                isAuth: false,
                isLoading: false,
                user: null,
                token: null
            }
        
        default:
            return state;
    }
}

export default authReducer;