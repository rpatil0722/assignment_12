import React, { Component } from 'react'

class ProductRow extends Component {

    destroy = () => {
        this.props.onDestroy(this.props.product.id);
   }

    render() {
        let name = this.props.product.name;
        let price = this.props.product.price;
        let category = this.props.product.category;
        return (
            <tr>
                <td>{name}</td>
                <td>{category}</td>
                <td>{price}</td>
                <td>
                    <button className="btn btn-info" type="button" onClick={this.destroy}>Delete</button>
                </td>
            </tr>
        )
    }
}

export default ProductRow