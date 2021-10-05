import { GET_CART_ITEMS, IS_LOADING } from '../actions/actionTypes';
const initState = {
    cart: [],
    isLoading: false
}

 const cartReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_CART_ITEMS:
            return {
                ...state,
                cart: [...payload],
                isLoading: false
            }
        case IS_LOADING:
            return {
                ...state,
                isLoading: true
            }
        default:
            return state;
    }
}

export default cartReducer;