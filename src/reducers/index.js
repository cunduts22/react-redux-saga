import {combineReducers} from 'redux'
import userReducers from './userReducers'
import bookReducers from './bookReducers'
const allReducers = combineReducers({
    userReducers,
    bookReducers    
})

export default allReducers