import { CREATE_FOOD, DELETE_FOOD, GET_FOODS, IS_LOADING } from "./actionTypes"
import axios from 'axios';
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
        console.log({error});
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

const setLoading = () => {
    return {
        type: IS_LOADING
    }
}