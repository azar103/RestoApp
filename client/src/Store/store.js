import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducers/root';
import thunk from 'redux-thunk';
const middlewares = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

export default store;



