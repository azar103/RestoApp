import { CLEAR_ERRORS, GET_ERRORS } from "../actions/actionTypes"

const initState = {
    msg: {},
    status: null,
    id: null
}


const errorReducer = (state = initState, { payload, type }) => {
    switch (type) {
        case GET_ERRORS:
            return {
                ...state,
                msg: payload.msg,
                status: payload.status,
                id: payload.id
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                msg: {},
                status: null,
                id: null
            }
        default:
            return state;
    }
}
export default errorReducer;