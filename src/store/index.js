import {createStore, combineReducers} from 'redux'
import * as test from './test/reducer'

let store = createStore(
    combineReducers({...test})
);

export default store;