import axios from 'axios'
const url = 'http://localhost:4000/'

export const getBooks = async (search) => {
    return await axios.get(url+'book?search='+search)
        .then(response => ({response}))
        .catch(error => ({error}))    
}

export const allBooks = async () => {
    return await axios.get(url+'book/allbooks')
        .then(response => ({response}))
        .catch(error => ({error}))   
}

export const getUser = async () => {
    return await axios.get(url+'user')
        .then(response => ({response}))
        .catch(error => ({error}))
}

export const getOneUsers = async (id) => {
    return await axios.get(url+'user/'+id)
        .then(response => ({response}))
        .catch(error => ({error}))
}

export const userLogin = async (username, password) => {
    return await axios({
        url: url+'auth/login',
        method: 'PATCH',
        data: {
            username,
            password
        }        
    })
    .then(response => ({response:response}))
    .catch(error => ({error}))
}

export const getAllFoto = async (pages) => {
    return await axios({
        url: url+'photo?pages='+pages,
        method: 'GET'
    })
    .then(response => ({response}))
    .catch(error => ({error}))

}

export const _checkAuths = async () => {
    try {        
        return await axios({
            url: url+'for-test?token='+localStorage.getItem('token'),
            method: 'GET'
        })
        .then(response => ({response}))
        .catch(error => ({error}))
    } catch (error) {
        console.log(error)
    }
}