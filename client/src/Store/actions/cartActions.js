import axios from 'axios';
import { GET_CART_ITEMS } from './actionTypes';

export const getCartItems = () => async dispatch => {
    try {
        const res = await axios.get('http://localhost:5000/api/cart/');
        dispatch({
            type: GET_CART_ITEMS,
            payload: res.data
        })
    } catch (error) {
        
    }
}
export const addItemToCart = (item) => async dispatch => {
    try {
        await axios.post('http://localhost:5000/api/cart/newItem', item);
        dispatch(getCartItems());
    } catch (error) {
        
    }
}
