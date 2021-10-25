import axios from 'axios';
import { AUTH_ERROR, GET_AUTH_ME,GET_USERS,IS_ADMIN,IS_LOADING,LOGIN_ERROR,LOGIN_SUCCESS, LOGOUT, NOT_LOADING, REGISTER_ERROR, REGISTER_SUCCESS} from './actionTypes';
import { returnErrors } from './errorActions';
export const login = (formData) => async dispatch => {
    dispatch(setLoading())
    try {
        const res = await axios.post('http://localhost:5000/api/auth/login', formData);
        setTimeout(() => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
        }, 3000);
    } catch (err) {

           // dispatch(returnErrors(err.response.data, err.response.status, 'LOGIN_ERROR'));
        setTimeout(() => {
            dispatch({
                type: LOGIN_ERROR
            })
        }, 3000);
       }
       
        
    
}


export const register = (formData) => async dispatch => {
    dispatch(setLoading())
    try {
        const res = await axios.post('http://localhost:5000/api/auth/register', formData);
        setTimeout(() => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            })
        }, 3000);
    } catch (error) {
        dispatch(returnErrors(error.response.data, error.response.status, 'REGISTER_ERROR'))
        setTimeout(() => {
            dispatch({
                type: REGISTER_ERROR
            })
        }, 3000);
    }
}


export const getCurrentUser = () => async dispatch => {
    dispatch(setLoading());
    try {
        const options = {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }
        const res = await axios.get("http://localhost:5000/api/auth/me", options);
        setTimeout(() => {
            dispatch({
                type: GET_AUTH_ME,
                payload: res.data
            })
        }, 3000);    
    } catch (error) {
        console.dir(error);
       setTimeout(() => {
            dispatch(returnErrors(error.response.data, error.response.status))
        }, 3000);
        dispatch({
            type: AUTH_ERROR
        })
    }
}

export const logout = () => async dispatch => {
    try {
        dispatch({
            type: LOGOUT
        })
    } catch (error) {
        
    }
}
const setLoading = () => {
    return {
        type: IS_LOADING
    }
}



