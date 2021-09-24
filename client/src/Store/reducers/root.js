import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import foodsReducer from "./foodsReducer";

export default combineReducers({
    auth: authReducer,
    foods: foodsReducer,
    error: errorReducer
})