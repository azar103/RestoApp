const { GET_RESTAURANTS, GET_RESTAURANT } = require("../actions/actionTypes")

const initState = {
    restaurants: [],
    restaurant: {}
}


const restaurantReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_RESTAURANTS:
            return {
                ...state,
                restaurants: [...payload]
            }
        case GET_RESTAURANT:
            return {
                ...state,
                restaurant: {
                    ...payload
                }
            }
        default:
            return state;
    }
}


export default restaurantReducer;