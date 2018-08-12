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
    // componentDidMount() {
    //     if(this.props.user.action) {
    //         console.log('action')
    //         this.props.user.action.authenticated ? this.props.history.push('/') : null
    //     } else if(this.props.user.error) {
    //         console.log('error')
    //         this.setState({err: true})
    //         Object.assign(this.state.message,this.props.user.error.data)
    //     } else {
    //         console.log('test')
    //     }

    // }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        if (!!nextProps.user.error && nextProps.user.error.data.message === "username doensn't exist") {
            this.setState({err: true})
            Object.assign(this.state.message,nextProps.user.error.payloa)
        }
        Object.assign(this.state.auth, nextProps.user.action)
        if(this.state.auth.authenticated === 'true') {
            this.props.history.push('/')
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
        user: state.userReducers
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