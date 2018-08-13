import React from 'react'
import SearchBar from '../search-bar'
import {Link} from 'react-router-dom'
import checkAuth from '../../utils/authorization'

class Searching extends React.Component {

    constructor(props) {
        super(props)
        
    }    
    
    componentWillMount = () => {
      this.props.onFetchAllBook()
    }
    

    render() {
         
        return (
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <Link to="/dashboard" className="btn btn-info">Dashboard</Link>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                    <SearchBar onFetchBookApi={this.props.onFetchBookApi}/>
                    </div>
                    <div className="card-body">
                       {
                           this.props.book.receiveData !== undefined ?
                           this.props.book.receiveData.map((data, index) => {
                               let genre = data.genre.join(', ');                               
                               console.log()
                                return (
                                    <div className="card" key={index}>
                                        <div className="card-body">
                                            <h4 className="card-">{data.title}</h4>
                                            <div className="row">
                                                <div className="col-md-4">Short History</div>
                                                <div className="col-md-8 text-black-50">{data.short_history}</div>                            
                                            </div>
                                            <div className="row">
                                                <div className="col-md-4">Genre</div>
                                                <div className="col-md-8 text-black-50"><i className="text-muted">{genre}</i></div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }) : <p>Loading ...</p>
                       }
                    </div>
                </div>
            </div>
        )
    }   
}

export default checkAuth(Searching)