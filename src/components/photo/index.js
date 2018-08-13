import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {FotoCard} from './photo-card'
import checkAuth from '../../utils/authorization'
class Photos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mainPages: 2,
            nextPages: 3,
            prevPages: 1,
            active: false,
            loading: true
        }
    }

    componentWillMount() {
        this.props.onFetchAllPhoto(1)
    }                
    
    componentWillReceiveProps(nextProps) {      
        if(nextProps.photos.length !== 0) {
            this.setState({
                loading: false
            })
        } else if(nextProps.photos.length !== 0 && this.state.prevPages === 1){
            this.setState({
                active: true
            })
        }
    }

    prevPages() {
        this.setState({
            loading: true
        })
        if(this.state.prevPages !== 1) {
            this.props.onFetchAllPhoto(this.state.prevPages)
            this.setState({
                prevPages: this.state.prevPages-1,
                nextPages: this.state.nextPages-1,
                mainPages: this.state.mainPages-1
            })
        }
        if(this.state.prevPages === 1) 
            this.setState({
                active: false
            },() => this.props.onFetchAllPhoto(1))
        
            
    }

    nextPages() {
        this.setState({
            loading: true
        })
        if(this.props.photos.length !== 0) {
            this.props.onFetchAllPhoto(this.state.nextPages)
            this.setState({
                nextPages: this.state.nextPages + 1,
                prevPages: this.state.prevPages + 1,
                mainPages: this.state.mainPages + 1
            })
        }
    }
   

    mainPages() {
        this.setState({
            loading: true
        })
        this.props.onFetchAllPhoto(this.state.mainPages)
        if(this.state.prevPages === 1) 
            this.setState({
                active: false
            })
        
        this.setState({
            active: true
        })        
    }

    render() {       
        const {active, mainPages, prevPages, nextPages, loading} = this.state
        return (
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <Link to="/dashboard" className="btn btn-info">Dashboard</Link>
                    </div>
                    <div className="card-body">
                        <div className="row justify-content-center">
                            <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                    <li className="page-item">
                                    <a className="page-link" href="javascript:void(0)" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    </li>         
                                    <li className={!active ? 'page-item active' : 'page-item'}><a className="page-link" href="javascript:void(0)" onClick={this.prevPages.bind(this)}>{prevPages}</a></li>
                                    <li className={active ? 'page-item active' : 'pages-item'}><a className="page-link" href="javascript:void(0)" onClick={this.mainPages.bind(this)}>{mainPages}</a></li>         
                                    <li className="page-item"><a className="page-link" href="javascript:void(0)" onClick={this.nextPages.bind(this)}>{nextPages}</a></li>         
                                    <li className="page-item">
                                    <a className="page-link" href="javascript:void(0)" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="card-body">
                        {
                            !loading ? 
                            this.props.photos.map(snap => {
                                return <FotoCard
                                            key={snap.id}
                                            image={snap.url}
                                            title={snap.title}
                                        />
                            }) : <p className="text-center">Loading ...</p>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default checkAuth(Photos)