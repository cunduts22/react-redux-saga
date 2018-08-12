import {FETCH_API, FETCH_FAILED, FETCH_SUCCEDED} from '../actions/types'
const bookReducers = (books = {}, action) => {
    switch(action.type) {
        case FETCH_API:
            return {
                ...books,
                receiveData: action.receiveData
            }
        case FETCH_FAILED:
            return {
                ...books,
                error: action.error.response
            }      
        case FETCH_SUCCEDED:
            return {
                books: action.receiveData,
                receiveData: action.receiveData
            }        
        default: 
            return books
    }

}

export default bookReducers