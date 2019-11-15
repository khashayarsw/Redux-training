import {combineReducers} from 'redux';
import Counter from './counter';
import Logger from './isLogged';
import Counting from './counter';

export const multiReducers = combineReducers({
    counts : Counting,
    login: Logger
})