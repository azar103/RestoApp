import { GET_FOODS } from "../actions/foodActions";

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
        {
            id: 4,
            name: 'Tasty Food',
            url: 'https://i.postimg.cc/Fs8sCzL3/dish-4.png',
            price: 15.9,
        },
        {
            id: 5,
            name: 'Tasty Food',
            url: 'https://i.postimg.cc/0Qysy1S9/dish-5.png',
            price: 15.9,
        },
        {
            id: 6,
            name: 'Tasty Food',
            url: 'https://i.postimg.cc/gkZPJDxL/dish-6.png',
            price: 15.9,
        }
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