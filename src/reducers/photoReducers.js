/**
 * Reducers will triggers when function that return type equal case type
 * Reducers return props[name] / this.props[name]
 * @param {*} [state=initalStatement]
 * @param {*} action
 * @returns props[name] / this.props[name]
 * [name] = initialStatement or others
 */

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
            } // object assign
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