import { CREATE_FOOD, DELETE_FOOD, GET_FOODS, IS_LOADING } from "../actions/actionTypes";


const initState = {
    foods: [],
}


const foodsReducer = (state=initState, {payload, type}) => {
    switch (type) {
        case GET_FOODS:
            return {
                ...state,
                foods: [...payload],
            }

        default:
            return state;
    }
}

export default foodsReducer;