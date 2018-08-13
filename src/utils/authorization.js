import React from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {checkAuth,fetchApi, fetchUser, fetchSelectedUser, fetchAllBooks, fetchPhoto} from '../actions'


export default function checkAuthor(Component) {
    return (connect(mapStateProps, mapDispatchToProps)(withRouter(class AuthWrapped extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                auth: 'false',
                obj: {}
            }
        }
        componentWillMount() {
            this.props.isAuth()
        }         
                
        
        render() {
            if(this.props.user !== null) {
                if(this.props.user.message === 'success') {
                   return <Component 
                            onFetchBookApi={this.props.onFetchBookApi} 
                            onFetchUserApi={this.props.onFetchUserApi}
                            onFetchOneUser={this.props.onFetchOneUser}
                            onFetchAllBook={this.props.onFetchAllBook}
                            onFetchAllPhoto={this.props.onFetchAllPhoto}
                            history={this.props.history} 
                            photo={this.props.photo}
                            photos={this.props.photos}
                            err={this.props.err}
                            user={this.props.user}
                            users={this.props.users} 
                            book={this.props.book}                            
                            error={this.props.error}
                          />
                } else {
                    return null
                }
            } else {
                return null
            }
        }
    })));
}

const mapStateProps = (state) => {
    return {
        user: state.userReducers.user,
        users: state.userReducers.users,
        error: state.userReducers.error,
        book: state.bookReducers,
        photo: state.photoReducers.photo,
        photos: state.photoReducers.photos,
        err: state.photoReducers.error        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {        
        isAuth: () => {
            return dispatch(checkAuth())
        },
        onFetchBookApi: (data) => {
            return dispatch(fetchApi(data))
        },
        onFetchUserApi: () => {
            return dispatch(fetchUser())
        },
        onFetchOneUser: (id) => {
            return dispatch(fetchSelectedUser(id))
        },
        onFetchAllBook: () => {
            return dispatch(fetchAllBooks())
        },
        onFetchAllPhoto: (pages) => {
            return dispatch(fetchPhoto(pages))
        }
    }
}

// export default (checkAuthor)