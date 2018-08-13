import {
    put,
    call,
    takeLatest
} from 'redux-saga/effects'
import { getAllFoto } from './api';
import { PHOTO_SUCCEDED, PHOTO_FAILED, FETCH_PHOTO } from '../actions/types';


function* getPhoto(action) {
    try {
        const {pages} = action
        const {response, error} = yield call(getAllFoto, pages)
        response ? yield put({type: PHOTO_SUCCEDED, payload: response.data})
                    : yield put({type: PHOTO_FAILED, error})
    } catch (error) {
        console.log(error)
    }
}

export function* watchPhoto() {
    yield takeLatest(FETCH_PHOTO, getPhoto)
}