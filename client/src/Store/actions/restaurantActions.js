import axios from 'axios';
import { GET_RESTAURANTS, IS_LOADING,LOGIN_ERROR,LOGIN_SUCCESS, REGISTER_ERROR, REGISTER_SUCCESS} from './actionTypes';
import { returnErrors } from './errorActions';

export const createRestaurant = (formData) => async dispatch => {
    try {
        await axios.post('http://localhost:5000/api/restaurants/', formData);
    } catch (error) {
        dispatch(returnErrors(error.response.data, error.response.status, 'CREATE_RESTAURANT_ERROR'))
        //console.log(error.response.data);
        setTimeout(() => {
            dispatch({
                type: REGISTER_ERROR
            })
        }, 3000);
    }
}

export const getRestaurants = () => async dispatch => {
    try {
        const res = await axios.get('http://localhost:5000/api/restaurants/');
        dispatch({
            type: GET_RESTAURANTS,
            payload: res.data
        })
        
    } catch (error) {
        
    }
}

const setLoading = () => {
    return {
        type: IS_LOADING
    }
}
