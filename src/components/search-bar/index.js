import React, { Component } from 'react'

export default class SearchBar extends Component {

    handleSearch(e) {
        this.props.onFetchBookApi({search: e.target.value})
    }

    render() {
        return (
           <nav className="navbar-expand-lg navbar-light bg-light">
            <form className="form-inline">
                <input className="form-control form-control-lg col-12" type="search" placeholder="Search" aria-label="Search" ref="search" onChange={this.handleSearch.bind(this)}/>
            </form>
           </nav>
        )
    }
}
