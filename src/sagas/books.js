/**
 * document author cunduts
 * yield takeLatest(@param type, @param method), when we call our function where have type = @param type then @param method will render
 * @param type is our trigger to run @param method
 * yield call is saga effect function to wait response from our api function or Promise
 * yield call(<getBooks,search>),this method do like getBooks(search)
 * yield put will trigger action where action have type = @param type
 * @param {*} action <= return type and data, from ./action => fetchApi(data) return {type,data}
 * @param {*} getBooks <= return response or error from ./api, where this method have @param search
 */

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