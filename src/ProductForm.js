import React, { Component } from 'react'

const RESET_VALUES = {id: '', category: '', price: '', name: ''}

class ProductForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: Object.assign({}, RESET_VALUES), errors: {}
       }
    }

    validate = () => {

        let name = this.state.product.name;
        let category = this.state.product.category;
        let price = this.state.product.price;
        let errors = {}

        if(name === "") {
            errors['name'] = "name error"
            this.setState({errors:errors})
            return false
        }  
        if(category === "") {
            errors['category'] = "category error"
            this.setState({errors:errors})
            return false
        }
        if(price === ""){
            errors['price'] = "price error"
            this.setState({errors:errors})
            return false
        }
        return true;
    }

    handleSave = (e) => {

        if(this.validate()) {
            this.props.onSave(this.state.product);
            this.setState({
                product: Object.assign({}, RESET_VALUES), errors: {}
            })
        }
        e.preventDefault();
    }

    handleChange = (e) => {
        const target = e.target    
        const name = target.name
        const value = target.value

        this.setState((prevState) => {
             prevState.product[name] = value
             return { product: prevState.product }
        })
    }

    render() {
        return (
            <div>
                <h2>Add New Product</h2>
                <div className="col-md-6">
                    <form> 
                        <div className="form-group">
                            <label htmlFor="productName">Name</label>
                            <input className="form-control" id="productName" type="text" onChange={this.handleChange} value={this.state.product.name} name="name"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="productCategory">Category</label>
                            <input className="form-control" id="productCategory" type="text" onChange={this.handleChange} value={this.state.product.category} name="category"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="productPrice">Price (in USD)</label>
                            <input className="form-control" id="productPrice" type="text" onChange={this.handleChange} value={this.state.product.price} name="price"></input>
                        </div>
                    
                        <button className="btn btn-info" type="button" onClick={this.handleSave}>Save</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default ProductForm;
