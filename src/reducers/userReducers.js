import {FETCH_API, FETCH_FAILED, FETCH_SUCCEDED, CHECK_AUTH, FETCH_SUCCEDED_USER} from '../actions/types'
const userReducers = (movies = {}, action) => {
    switch(action.type) {
        case FETCH_API:
            return {
                movies,
                receiveData: action.receiveData
            }
        case FETCH_FAILED:
            return {
                ...movies,
                error: action.error.response
            }      
        case FETCH_SUCCEDED:
            return {
                movies,
                receiveData: action.receiveData
            }
        case CHECK_AUTH:
            return {
                ...movies,
                action
            }       
        default: 
            return movies
    }

}

export default userReducers