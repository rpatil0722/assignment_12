import React, {Component} from 'react';
import './App.css';
import Filter from './Filter';
import ProductTable from './ProductTable';
import ProductForm from './ProductForm';


let PRODUCTS = {
  '1': {id: 1, category: 'Clothing', price: '$50', name: 'Jeans'},
  '2': {id: 2, category: 'Groceries', price: '$20', name: 'Spinach'},
  '3': {id: 3, category: 'Electronics', price: '$1100', name: 'Television'},
  '4': {id: 4, category: 'Electronics', price: '$500', name: 'Mobile'},
  '5': {id: 5, category: 'Furniture', price: '$1,500', name: 'Sofa'},
  '6': {id: 6, category: 'Electronics', price: '$100', name: 'Heater'},
  '7': {id: 7, category: 'Furniture', price: '$2000', name: 'Bed'},
  '8': {id: 8, category: 'Clothing', price: '$300', name: 'Jacket'}
};


class Product extends Component {

  constructor(props) {
    super(props);
    this.state = {
        products : PRODUCTS,
        filterText : ''
      }
  }

  handleFilter = (filterInput) => {
    this.setState(filterInput);
  }

  handleSave = (product) => {
    if (!product.id) {
         product.id = new Date().getTime()
    }
    this.setState((prevState) => {
      let products = prevState.products
      product.price  = '$'+product.price;
      products[product.id] = product
      return { products }
    });

  }

  handleDestroy = (productId) => {
    this.setState((prevState) => {
      let products = prevState.products
      delete products[productId]
      return { products }
    });
}


  render() {
    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-6">
            <h1>My Inventory</h1>
            <Filter 
                onFilter={this.handleFilter}/>

            <ProductTable 
                products={this.state.products} 
                filterText={this.state.filterText}
                onDestroy={this.handleDestroy}/>

            <ProductForm
                onSave={this.handleSave}/>
            </div>
        </div>
      </div>
    )
  }
}

export default Product;
