import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {multiReducers} from './reducers/index';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import { create } from 'domain';


const store = createStore(
    multiReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

ReactDOM.render( 
    <Provider store={store}>
        <App />
    </Provider>

 , document.getElementById('root'));
serviceWorker.unregister();
