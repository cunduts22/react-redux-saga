import {connect} from 'react-redux'
import RoutesConfig from '../routes'
import { loginAction, checkAuth, logoutUser} from '../actions'

const mapStateProps = (state) => {
    return {
        user: state.userReducers.user,
        users: state.userReducers.users,
        error: state.userReducers.error,
        book: state.bookReducers,
        // allUser: state.allUser,
        // selectUser: state.selectUser
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