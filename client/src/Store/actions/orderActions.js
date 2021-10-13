import axios from 'axios';
import { GET_ORDERS, POST_ORDER_FAILED } from './actionTypes';
import { deleteItems } from './cartActions';
import { returnErrors } from './errorActions';

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
        dispatch(returnErrors(error.response.data, error.response.status, 'POST_ORDER_FAILED'));
        dispatch({
            type: POST_ORDER_FAILED
        })
    }
}

export const editOrder = (id, status) =>async dispatch => {
    try {
        await axios.put(`http://localhost:5000/api/orders/${id}`, status);
        dispatch(getOrders());
    } catch (error) {
        
    }
}