import React, { Component } from 'react';

class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: '',
      productNameError: '',
    };
  }

  handleProductNameChange = (event) => {
    const { value } = event.target;
    if (value.length <= 10) {
      this.setState({
        productName: value,
        productNameError: '',
      });
    } else {
      this.setState({
        productNameError: 'Product Name should not exceed 10 characters.',
      });
    }
  };

  render() {
    const { productName, productNameError } = this.state;

    return (
      <div>
        <h2>Create Product</h2>
        <div>
        <h4><strong>Detail Product</strong></h4>
          <label htmlFor="product name">Product Name:</label><br />
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={this.handleProductNameChange}
          />
          {productNameError && <p style={{ color: 'red' }}>{productNameError}</p>}
        </div>
      </div>
    );
  }
}

export default ProductForm;
