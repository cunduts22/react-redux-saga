import { FETCH_API, FETCH_FAILED, FETCH_SUCCEDED, FETCH_ALL_BOOKS } from '../actions/types'
import {getBooks, allBooks} from './api'
import { put, call, takeLatest } from 'redux-saga/effects'

function* fetchBooks(action) {
    try {
        const {search} = action.data
        const {response, error} = yield call(getBooks,search)
        if(response) {
            yield put({ type: FETCH_SUCCEDED, receiveData: response.data })
        } else {
            yield put({type: FETCH_FAILED, error})
        }
    } catch (error) {
        console.log(error)
    }
}

function* fetchAllBooks() {
    try {
        const {response, error} = yield call(allBooks)
        if(response) {
            yield put({ type: FETCH_SUCCEDED, receiveData: response.data })
        } else {
            yield put({type: FETCH_FAILED, error})
        }
    } catch (error) {
        console.log(error)
        
    }
}

export function* watchFetchBooks() {
    yield takeLatest(FETCH_API, fetchBooks)
    yield takeLatest(FETCH_ALL_BOOKS, fetchAllBooks)
}