import { GET_FOODS } from "../actions/actionTypes";


const initState = {
    foods: [
        {
            id: 1,
            name: 'Tasty Food',
            url: 'https://i.postimg.cc/VLGzr6R2/dish-1.png',
            price: 15.9,
        },
        {
            id: 2,
            name: 'Tasty Food',
            url: 'https://i.postimg.cc/6q4frTZz/dish-2.png',
            price: 15.9,
        },
        {
            id: 3,
            name: 'Tasty Food',
            url: 'https://i.postimg.cc/3xk0WzgC/dish-3.png',
            price: 15.9,
        },
    ]
}


const foodsReducer = (state=initState, {payload, type}) => {
    switch (type) {
        case GET_FOODS:
            return {
                ...state,
                foods:[...state.foods]
            }
    
        default:
            return state;
    }
}

export default foodsReducer;