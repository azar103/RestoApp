import { GET_CART_ITEMS, GET_TOTAL_PRICE, IS_LOADING, NOT_NEW_ORDER, SET_NEW_ORDER } from '../actions/actionTypes';
const initState = {
    cart: [],
    isLoading: false,
    totalPrice: 0,
    newOrder: false
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
        case SET_NEW_ORDER:
            return {
                ...state,
                newOrder:true
            }
        case NOT_NEW_ORDER:
            return {
                ...state,
                newOrder: false
            }
        default:
            return state;
    }
}

export default cartReducer;