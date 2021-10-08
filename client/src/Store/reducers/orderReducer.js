import { GET_ORDERS } from "../actions/actionTypes"

const initState = {
    orders: []
}


const orderReducer = (state = initState, { action, type }) => {
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