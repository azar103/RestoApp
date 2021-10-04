import { CREATE_FOOD, CREATE_FOOD_ERROR, DELETE_FOOD, GET_FOODS, GET_ONE_FOOD, IS_LOADING } from "./actionTypes"
import axios from 'axios';
import { returnErrors } from "./errorActions";
export const getAllFoods = () => async dispatch => {
    try {
        const res = await axios.get('http://localhost:5000/api/foods/')
            dispatch({
                type: GET_FOODS,
                payload: res.data
             })
    } catch (error) {
        console.log({error});
    }

}
export const saveFood = (form) => async dispatch => {
    try {
        await axios.post('http://localhost:5000/api/foods/newFood', form);
        dispatch(getAllFoods());
    } catch (error) {
        dispatch(returnErrors(error.response.data, error.response.status, 'CREATE_FOOD_ERROR'));
        setTimeout(() => {
            dispatch({
                type: CREATE_FOOD_ERROR
            })
        }, 3000);
    }
}

export const deleteFood = (item) => async dispatch => {

    try {
        await axios.delete(`http://localhost:5000/api/foods/${item._id}`)
        dispatch(getAllFoods())
    } catch (error) {
        console.log({error});   
    }
}

export const getOneFood = (id) => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:5000/api/foods/${id}`);
        dispatch({
            type: GET_ONE_FOOD,
            payload: res.data
        })
        
    } catch (error) {
        
    }
}
export const editFood = (id, form) => async dispatch => {
    try {
        await axios.put(`http://localhost:5000/api/foods/${id}`, form);
        dispatch(getAllFoods());
    } catch (error) {
        console.log({error});
    }
}
const setLoading = () => {
    return {
        type: IS_LOADING
    }
}