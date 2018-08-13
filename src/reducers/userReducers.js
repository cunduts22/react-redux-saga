import {FETCH_API, FETCH_FAILED, FETCH_SUCCEDED, CHECK_AUTH, FETCH_SUCCEDED_USER, SELECTED_USER, SUCCESS_AUTH, FAIELD_AUTH} from '../actions/types'
const initialState = {
    users: [],
    user: {},
    check: {}
}
const userReducers = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_API:
            return {
                ...state,
                users: action.receiveData
            }
        case FETCH_FAILED:
            return {
                ...state,
                error: action.error.response
            }      
        case FETCH_SUCCEDED:
            return {
                ...state,
                users: action.receiveData
            }
        case CHECK_AUTH:
            return {
                ...state,
                check: action.payload
            }       
        case SELECTED_USER:
            return {
                ...state,
                user: action.receiveData
            }
        case SUCCESS_AUTH:
            return {
                ...state,
                user: action.receiveData
            }
        case FAIELD_AUTH:
            return {
                ...state,
                error: action.error.response
            }
        case FETCH_SUCCEDED_USER:
            return {
                ...state,
                users: action.receiveData
            }
        default: 
            return state
    }

}

export default userReducers