import {combineReducers} from 'redux'
import userReducers from './userReducers'
import bookReducers from './bookReducers'
import allUser from './allUser'
import selectUser from './selectedUser'
const allReducers = combineReducers({
    userReducers,
    bookReducers,
    allUser,
    selectUser
})

export default allReducers