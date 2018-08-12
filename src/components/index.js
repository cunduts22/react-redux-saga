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
                        <Link to="/search">Search API</Link>
                    </div>
                    <div className="card-body">
                        {
                            this.props.allUser.receiveData ?
                            this.props.allUser.receiveData.map(snap => {
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