import axios from 'axios';
import { GET_ORDERS } from './actionTypes';

export const getOrders = () => async dispatch => {
   try {
       const res = await axios.get('http://localhost:5000/api/orders/');
       dispatch({
           type: GET_ORDERS,
           payload: res.data
       })
   } catch (error) {
       
   }
}

export const saveOrder = (form) => async dispatch => {
    try {
        await axios.post('http://localhost:5000/api/orders/', form);
        dispatch(getOrders());
    } catch (error) {
        
    }
}