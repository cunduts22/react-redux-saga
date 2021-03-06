/**
 * Define our action where return type
 */

import {USER_LOGIN,FETCH_API, FETCH_FAILED, FETCH_SUCCEDED, FETCH_USER, FETCH_SUCCEDED_USER, SELECTED_USER, FETCH_SELECTED_USER, FETCH_ALL_BOOKS, SUCCESS_AUTH, FAIELD_AUTH, CHECK_AUTH, FETCH_PHOTO, PHOTO_SUCCEDED, PHOTO_FAILED} from './types'
export const loginAction = (data) => {
    return {
        type: USER_LOGIN,
        data
    }
}

export const fetchUser = () => {
    return {
        type: FETCH_USER
    }
}

export const fetchAllBooks = () => {
    return {
        type: FETCH_ALL_BOOKS
    }
}

export const fetchUserSuccess = (receiveData) => {
    return {
        type: FETCH_SUCCEDED_USER,
        receiveData
    }
}

export const fetchSelectedUser = (id) => {
    return {
        type: FETCH_SELECTED_USER,
        id
    }
}

export const selectedUser = (receiveData) => {
    return {
        type: SELECTED_USER,
        receiveData
    }
}

export const fetchApi = (data) => {
    return {
        type: FETCH_API,
        data        
    }
}

export const fetchFailed = (error) => {
    return {
        type: FETCH_FAILED,
        error
    }
}

export const fetchSuccess = (receiveData) => {
    return {
        type: FETCH_SUCCEDED,
        receiveData
    }
}

export const auth = (receiveData) => {
    return {
        type: SUCCESS_AUTH,
        receiveData
    }
}

export const failedAuth = (error) => {
    return {
        type: FAIELD_AUTH,
        error
    }
}

export const checkAuth = () => { 
    return {
        type: CHECK_AUTH        
    }
}

export const fetchPhoto = (pages) => {
    return {
        type: FETCH_PHOTO,
        pages
    }
}

export const succededPhoto = (payload) => {
    return {
        type: PHOTO_SUCCEDED,
        ...payload
    }
}

export const failedPhoto = (error) => {
    return {
        type: PHOTO_FAILED,
        error
    }
}

export const saveToken = (token) => {
    if (!!token) {
        if (!!localStorage.getItem('token')) {
            localStorage.removeItem('token')
            return localStorage.setItem('token', token)
        } else {
            return localStorage.setItem('token', token)
        }
    } else {
        return null
    }
}

export const logoutUser = () => {
    if(!!localStorage.getItem('token')) {
        localStorage.removeItem('token')
        window.location.replace('/login')
    } else {
        return null
    }
}