import { DELETE_ORDER, GET_ORDERS, POST_ORDER_FAILED } from "../actions/actionTypes"

const initState = {
    orders: []
}


const orderReducer = (state = initState, { payload, type }) => {
    switch (type) {
        case GET_ORDERS:
            return {
                ...state,
                orders: [...payload]
            }
        default:
            return state;
    }
}

export default orderReducer;