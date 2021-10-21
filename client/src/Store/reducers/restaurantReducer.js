const { GET_RESTAURANTS } = require("../actions/actionTypes")

const initState = {
    restaurants: []
}


const restaurantReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_RESTAURANTS:
            return {
                ...state,
                restaurants: [...payload]
            }
        default:
            return state;
    }
}


export default restaurantReducer;