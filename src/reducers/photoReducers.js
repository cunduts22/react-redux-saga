import { FETCH_PHOTO, PHOTO_SUCCEDED, PHOTO_FAILED } from "../actions/types";

const initalStatement = {
    photo: {},
    photos: []
}

const photoReducers = (state = initalStatement, action) => {
    switch(action.type) {
        case FETCH_PHOTO:
            return {
                ...state,
                pages: action.pages
            }
        case PHOTO_SUCCEDED:
            return {
                ...state,
                photos: action.payload
            }
        case PHOTO_FAILED:
            return {
                ...state,
                error: action.error
            }
        default: return initalStatement
    }
}

export default photoReducers