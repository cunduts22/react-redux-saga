import { USER_LOGIN,FETCH_SUCCEDED, FETCH_FAILED, CHECK_AUTH, FETCH_USER, FETCH_SUCCEDED_USER, SELECTED_USER, FETCH_SELECTED_USER, SUCCESS_AUTH, FAIELD_AUTH } from '../actions/types'
import {saveToken} from '../actions'
import {userLogin, _checkAuths, getUser, getOneUsers} from './api'
import { put, call, takeLatest } from 'redux-saga/effects'

function* login(action) {
    try {
        const {username, password} = action.data
        const {response, error} = yield call(userLogin,username,password)
        if(response) {
            yield call(saveToken, response.data.token)
            yield put({type: SUCCESS_AUTH, receiveData: response.data})
            window.location.replace('/')
        } else {
            yield put ({type: FAIELD_AUTH, error})
        }

    } catch (error) {
        console.log(error)
    }
}

function* allUser() {
    try {
        const {response, error} = yield call(getUser)
        if(response) {
            yield put({type: FETCH_SUCCEDED_USER, receiveData: response.data})
        } else {
            yield put ({type: FETCH_FAILED, error})
        }
    } catch (error) {
        console.log(error)
    }
}

function* getOneUser(action) {
    try {
        const {id} = action
        const {response, error} = yield call(getOneUsers, id)
        if(response) {
            yield put({type: SELECTED_USER, receiveData: response.data})
        } else {
            yield put ({type: FETCH_FAILED, error})
        }
    } catch (error) {
        // console.log(error)
    }
}

function* _checkAuth() {
    try {
        const {response, error} = yield call(_checkAuths)
        if(response) {
            yield put({type: SUCCESS_AUTH, receiveData: response.data})
        } else {
            yield put({type: FAIELD_AUTH, error})
        }
    } catch (error) {
        console.log(error)
    }
}

export function* userSaga() {
    yield takeLatest(USER_LOGIN, login)
    yield takeLatest('CHECK_AUTS', _checkAuth)
    yield takeLatest(FETCH_USER, allUser)
    yield takeLatest(FETCH_SELECTED_USER, getOneUser)
}