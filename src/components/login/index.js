import React, { Component } from 'react'
import {connect} from 'react-redux'
import {loginAction,checkAuth} from '../../actions'
class Login extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         auth: {},
         message: {},
         err: false
      };
    };
    
    componentWillMount = () => {
      this.props.isAuth()      
    };
    componentWillReceiveProps(nextProps) {
        
        if(nextProps.error !== undefined) {
            if(nextProps.error.data.message === "username doensn't exist") {
                this.setState({err: true})
                Object.assign(this.state.message,nextProps.error.data)
            }
        }
        Object.assign(this.state.auth, nextProps.user)

        if(this.state.auth.message === 'success') {
            // <Redirect to="/dashboard" />
            this.props.history.push('/dashboard')
        }
    }    

    handleUser(e) {
        const password = this.refs.password.value,
            username = this.refs.username.value
        this.props.onLogin({username,password})        
        e.preventDefault()
    }

    render() {
        return (
            <div className="container">
                <h4 className="display-4 text-center">Login</h4>
                <div className="row justify-content-center" style={{width: "100%"}}>
                    <form onSubmit={this.handleUser.bind(this)}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Username</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="exampleInputEmail1" 
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                                ref="username" 
                                style={{borderColor: this.state.err ? 'red' : null}}
                                />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            {this.state.err ? <small className="text-danger">{this.state.message.message}</small> : null}
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" ref="password"/>
                        </div>                        
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>            
            </div>    
        )
    }
}

const mapStateProps = (state) => {
    return {
        user: state.userReducers.user,
        error: state.userReducers.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {        
        onLogin: (data) => {
            dispatch(loginAction(data))
        },
        isAuth: () => {
            dispatch(checkAuth())
        }
    }
}


export default connect(mapStateProps, mapDispatchToProps)(Login)