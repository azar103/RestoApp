import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './Store/store';
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/lib/persistStore';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistStore(store)}>
       <App />
    </PersistGate>   
  </Provider>,
  document.getElementById('root')
);


