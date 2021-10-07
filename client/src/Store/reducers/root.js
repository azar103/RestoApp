import { combineReducers } from "redux";
import cartReducer  from "./cartReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import foodsReducer from "./foodsReducer";
import storage from "redux-persist/lib/storage";
import {persistCombineReducers} from 'redux-persist';

const rootPersistConfig = {
    key: 'root',
    storage,
}
export default persistCombineReducers(rootPersistConfig, {
    auth: authReducer,
    foods: foodsReducer,
    error: errorReducer,
    cart: cartReducer
})