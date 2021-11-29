import React, { Component } from 'react'

class Filter extends Component {


    handleChange = (e) => {
        this.props.onFilter({
            filterText : e.target.value
       });
    }

    render() {
        return (
            <div className="my-3">
                <input 
                        className="form-control" 
                        type="text" 
                        placeholder="Search..."
                        onChange={this.handleChange}>        
                </input>
            </div>
        )
    }
}

export default Filter;
