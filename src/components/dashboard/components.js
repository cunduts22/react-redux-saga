import React from 'react'
import {Link} from 'react-router-dom'
export const DisplayUser = (props) => (
    <div className="card">
        <div className="card-body">
            <h3 className="card-title">{props.name ? props.name : 'John Doe'}</h3>
            <div className="row">
                <div className="col-md-6">Name</div>
                <div className="col-md-6">{props.name ? props.name : 'John Doe'}</div>
            </div>
            <div className="row">
                <div className="col-md-6">Email</div>
                <div className="col-md-6">{props.email ? props.email : 'john_doe@gmail.com'}</div>
            </div>
            <div className="row">
                <div className="col-md-6">Phone Number</div>
                <div className="col-md-6">{props.phone ? props.phone : '081242904745'}</div>
            </div>
            <div className="row">
                <div className="col-md-6">Gender</div>
                <div className="col-md-6">{props.gender ? props.gender : 'Male'}</div>
            </div>            
        </div>
        <div className="card-footer">
            <div className="row justify-content-end">
                <div className="col-md-1">
                    <button className="btn btn-danger" onClick={() => {
                        const {name,email,phone,gender,id} = props
                        localStorage.setItem('id', id)
                        localStorage.setItem('name',name)
                        localStorage.setItem('email', email)
                        localStorage.setItem('phone', phone)
                        localStorage.setItem('gender', gender)
                    }}>Save</button>
                </div>
                <div className="col-md-2">
                    <button className="btn btn-primary" onClick={() => {
                        Promise.resolve(props.onFetchOneUser(props.id))
                            .then(res => props.history.push('/edit-user'))
                            .catch(err => console.log(err))
                    }}>Edit User</button>
                </div>
            </div>
        </div>
    </div>
)

class EditUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: '',
            isValid: true
        }
    }

    selectRadio(e) {
        this.setState({
            selected: e.target.value
        })
    }    
    
    handleUser = (e) => {
        const email = this.refs.email.value
        const name = this.refs.name.value
        const gender = this.state.selected
        const phone = this.refs.phone.value
        const data = {
            email,name,gender,phone
        }
        console.log(data)
        // this.props.on(data)
        e.preventDefault()
    }
    checkValid(e) { 
        let value = e.target.value 
        var valid = /^\+?([0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})[-. ]?([0-9]{5})$/; // regExp for phone number +XX-XXX-XXX-XXXXX
        if(value.match(valid)) {
            this.setState({
                isValid: true
            })                        
        } else {
            this.setState({
                isValid: false
            })
        }
    }

    render() {
        console.log(this.props)
        return (            
            <div className="container">
                <div className="card">
                    <div className="card-header"><Link to="/dashboard" className="btn btn-info">Dashboard</Link></div>
                    <div className="card-body">                    
                        {this.props.user !== undefined ?
                            <form className="form" onSubmit={this.handleUser.bind(this)}>            
                                <div className="form-group">
                                    <label htmlFor="username">Name</label>
                                    <input type="text" defaultValue={this.props.user.name} ref="name" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" defaultValue={this.props.user.email} ref="email" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <div className="row">
                                        <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
                                        <div className="col-sm-10">
                                            <div className="form-check">
                                                <input className="form-check-input" ref="male" type="radio" name="gender" id="gridRadios1" defaultValue="male" onChange={this.selectRadio.bind(this)} checked={this.state.selected === 'male' || this.props.user.gender === 'male'}/>
                                                <label className="form-check-label" htmlFor="gridRadios1">
                                                    Male
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" ref="female" type="radio" name="gender" id="gridRadios2" defaultValue="female" onChange={this.selectRadio.bind(this)} checked={this.state.selected === 'female' || this.props.user.gender === 'female'}/>
                                                <label className="form-check-label" htmlFor="gridRadios2">
                                                    Female
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>                    
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input type="text" ref="phone" defaultValue={this.props.user.phone_number} className="form-control" style={{borderColor: this.state.isValid ? null : 'red'}} onChange={this.checkValid.bind(this)}/>
                                </div>
                                <div className="form-group">
                                    <input type="submit" defaultValue="Save" className="btn btn-primary"/>
                                </div> 
                            </form> : <p>Loading ...</p>
                        }
                    </div>
                </div>
            </div>
        )
    }
}


export default EditUser