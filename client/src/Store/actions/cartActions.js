import axios from 'axios';
import { GET_CART_ITEMS, GET_TOTAL_PRICE } from './actionTypes';
import { returnErrors } from './errorActions';

export const getCartItems = () => async dispatch => {
    try {
        const res = await axios.get('http://localhost:5000/api/cart/');
        dispatch({
            type: GET_CART_ITEMS,
            payload: res.data
        })
    } catch (error) {
        dispatch(returnErrors(error.response.data, error.response.status, 'ADD_FOOD_ERROR'));
    }
}
export const addItemToCart = (item) => async dispatch => {
    try {
        await axios.post('http://localhost:5000/api/cart/newItem', item);
        dispatch(getCartItems());
    } catch (error) {
        
    }
}

export const removeItemFromCart = (id) => async dispatch => {
    try {
        await axios.delete(`http://localhost:5000/api/cart/${id}`);
        dispatch(getCartItems());
    } catch (error) {
        
    }
}

export const editPriceAndQuantity = (id, obj) => async dispatch => {
    try {
        await axios.put(`http://localhost:5000/api/cart/edit/${id}`, obj);
        dispatch(getCartItems());
    } catch (error) {
        
    }
}

export const getTotalPrice = (userId) => async dispatch => {
    try {
        dispatch({
            type: GET_TOTAL_PRICE,
            payload: userId
        })

    } catch (error) {
        
    }
}