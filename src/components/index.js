import React, { Component } from 'react'
import {DisplayUser} from './dashboard/components'
import checkAuth from '../utils/authorization'
import {Link} from 'react-router-dom'
class Dashboard extends Component {

    componentWillMount = () => {
      this.props.onFetchUserApi()
    };        
    
    render() {
    return (
        <div>                
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <Link to="/book" className="btn btn-info">Book</Link>
                        <Link to="/photos" className="btn btn-danger">Photos</Link>
                    </div>
                    <div className="card-body">
                        {
                            this.props.users ?
                            this.props.users.map(snap => {
                                return <DisplayUser 
                                            key={snap._id}
                                            id={snap._id}
                                            name={snap.name} 
                                            email={snap.email} 
                                            phone={snap.phone_number} 
                                            gender={snap.gender} 
                                            onFetchOneUser={this.props.onFetchOneUser}
                                            history={this.props.history}
                                        /> 
                            }) : <DisplayUser/> 
                        }                        
                    </div>
                </div>
            </div>
        </div>
    )
}
}
export default checkAuth(Dashboard)