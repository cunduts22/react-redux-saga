/**
 * MapStateProps
 * @param state, where state from actions
 * mapDispatchToProps
 * @param dispatch, where dispatch as function from connect => module react-redux
 * dispatch (@param our action)
 */

import {connect} from 'react-redux'
import RoutesConfig from '../routes'
import { loginAction, checkAuth, logoutUser} from '../actions'

const mapStateProps = (state) => {
    return {
        user: state.userReducers.user,
        users: state.userReducers.users,
        error: state.userReducers.error,
        book: state.bookReducers        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {                      
        onLogin: (data) => {
            dispatch(loginAction(data))
        },
        onLogout: () => {
            dispatch(logoutUser())
        },
        checkAuth: () => {
            dispatch(checkAuth())
        }
    }
}

const MyContainer = connect(mapStateProps,mapDispatchToProps)(RoutesConfig)

export default MyContainer
