import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'

import Login from '../components/login'
import Dashboard from '../components'
import EditUser from '../components/dashboard/components';
import Searching from '../components/search';
export default class RouterConfig extends Component {   
    componentWillMount() {
        this.props.checkAuth()        
    }   

    logoutUser() {
        this.props.onLogout()
    }
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Dashboard}/>
                    <Route exact path="/dashboard" component={Dashboard}/>

                    <Route exact path="/edit-user" render={() => {
                        return <EditUser user={this.props.user}/>
                    }}/>
                    <Route path='/search' component={Searching}/>
                    
                    <Route path="/login" component={Login}/>
                    {
                        this.props.error === undefined?
                        <div className="row justify-content-center">
                            <button className="center btn btn-danger" onClick={this.logoutUser.bind(this)}>Logout</button>
                        </div>
                        : null
                    }
                    <Route exact render={() => {
                        {
                            return this.props.error === null ?
                             <Redirect to="/dashboard" /> :<Redirect to="/login" />
                            
                        }
                    }}/>
                    
                </div>
            </Router>
        )
    }
}
