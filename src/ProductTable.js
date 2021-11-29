import React, { Component } from 'react'
import ProductRow from './ProductRow';

class ProductTable extends Component {


    handleDestroy = (id) => {
        this.props.onDestroy(id)
    }

    render() {
        let filterText = this.props.filterText;
        let products = this.props.products;
        return (
            <div>
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.keys(products)
                                .filter(
                                    key => products[key].name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
                                )
                                .map( 
                                key => {
                                    return (
                                        <ProductRow 
                                            key = {products[key].id} 
                                            product = {products[key]} 
                                            onDestroy={this.handleDestroy} 
                                        >
                                        </ProductRow>
                                    )
                                }
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ProductTable;