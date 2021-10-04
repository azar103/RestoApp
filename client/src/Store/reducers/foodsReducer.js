import { CREATE_FOOD, DELETE_FOOD, GET_FOODS, GET_ONE_FOOD, IS_LOADING } from "../actions/actionTypes";


const initState = {
    foods: [],
    food: null
}


const foodsReducer = (state=initState, {payload, type}) => {
    switch (type) {
        case GET_FOODS:
            return {
                ...state,
                foods: [...payload],
            }
        case GET_ONE_FOOD:
            return {
                ...state,
                food: payload
            }

        default:
            return state;
    }
}

export default foodsReducer;