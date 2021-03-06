/**
 * Reducers will triggers when function that return type equal case type
 * Reducers return props[name] / this.props[name]
 */

import {combineReducers} from 'redux'
import userReducers from './userReducers'
import bookReducers from './bookReducers'
import photoReducers from './photoReducers'
const allReducers = combineReducers({
    userReducers,
    bookReducers,
    photoReducers    
})

export default allReducers