import { GET_CART_ITEMS, GET_TOTAL_PRICE, IS_LOADING } from '../actions/actionTypes';
const initState = {
    cart: [],
    isLoading: false,
    totalPrice: 0
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
        case GET_TOTAL_PRICE:
            return {
                ...state,
                totalPrice: state.cart.filter((item) => item.userId === payload).reduce((acc, val) => acc + parseFloat(val.item.price, 3), 0)
            }
        default:
            return state;
    }
}

export default cartReducer;