
import React from 'react';
import Button from '../component/onclick';
import Article from './article';
import ProductForm from './productname';
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Mycomponent() {
  // regex
  const productNameRegex = /^[A-Za-z0-9\s]+$/; // Alphanumeric and spaces allowed
  const productCategoryRegex = /^(Food|Drink)$/; // Only "Food" or "Drink" allowed
  const productFreshnessRegex = /^(Brand New|Second Hank|Refurbished)$/; // Only specified values allowed
  const productPriceRegex = /^\d+$/; // Only digits allowed

  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productFreshness, setProductFreshness] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productNameError, setProductNameError] = useState("");
  const [productCategoryError, setProductCategoryError] = useState("");
  const [productFreshnessError, setProductFreshnessError] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [productImageError, setProductImageError] = useState("");
  const [productPriceError, setProductPriceError] = useState("");

  const addProduct = () => {
    // validate product name
    if (!productNameRegex.test(productName)) {
      setProductNameError("Product name is invalid.");
      return;
    }

    // validate product category
    if (!productCategoryRegex.test(productCategory)) {
      setProductCategoryError("Product category is invalid.");
      return;
    }

    // valisate product freshness
    if (!productFreshnessRegex.test(productFreshness)) {
      setProductFreshnessError("Product freshness is invalid.");
      return;
    }

    // Validate product image
    if (!productImage) {
      setProductImageError("Please upload an image of the product.");
      return;
    }

    // validate product price
    if (!productPriceRegex.test(productPrice)) {
      setProductPriceError("Product price is invalid.");
      return;
    }

    const productId = uuidv4();
    const isDuplicate = products.some((product) => product.id === productId);
    if (!isDuplicate) {
      const newProduct = {
        id: productId,
        productName,
        productCategory,
        productFreshness,
        productPrice,
        productImage: URL.createObjectURL(productImage), // // Menyimpan URL gambar untuk ditampilkan di tabel
      };
      setProducts([...products, newProduct]);

      // Reset nilai input
      setProductName("");
      setProductCategory("");
      setProductFreshness("");
      setProductPrice("");
      setProductNameError("");
      setProductCategoryError("");
      setProductFreshnessError("");
      setProductPriceError("");
    } else {
      alert("Nomor produk sudah ada. Silakan coba lagi.");
    }
  };

  const options = [
    { label: "Household appliance", value: "Food" },
    { label: "Electronic", value: "Drink" },
  ];

  const handleDelete = (productId) => {
    const shouldDelete = window.confirm("Apakah Anda yakin ingin menghapus produk ini?");
    if (shouldDelete) {
      const updatedProducts = products.filter((product) => product.id !== productId);
      setProducts(updatedProducts);
    }
  };

  return (
    <div>
      <h1>Create Product</h1>
      <h3>Detail Product</h3>
      <label htmlFor="productName">Product Name :</label> <br />
      <input
        type="text"
        value={productName}
        onChange={(e) => {
          setProductName(e.target.value);
          setProductNameError(""); // clear previous error
        }}
      />
      {productNameError && <span className="error">{productNameError}</span>}
      <br /><br/> 
      <label htmlFor="productCategory">Product Category : </label> <br />
      <select
        onChange={(e) => {
          setProductCategory(e.target.value);
          setProductCategoryError(""); // clera previous error
        }}
        name="productCategory"
      >
        <br />
        <option value="" disabled selected>
          Choose....
        </option>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
      {productCategoryError && <span className="error">{productCategoryError}</span>}
      <br /><br/>
      <label htmlFor="name">Product Freshness</label> <br />
      <input
        type="radio"
        name="product"
        value="Brand New"
        onChange={(e) => {
          setProductFreshness(e.target.value);
          setProductFreshnessError(""); // clear previous error
        }}
      />
      <label htmlFor="brand">Brand New</label> <br />
      <input
        type="radio"
        name="product"
        value="Second Hank"
        onChange={(e) => {
          setProductFreshness(e.target.value);
          setProductFreshnessError(""); // clear previous error
        }}
      />
      <label htmlFor="second">Second Hank</label> <br />
      <input
        type="radio"
        name="product"
        value="Refurbished"
        onChange={(e) => {
          setProductFreshness(e.target.value);
          setProductFreshnessError(""); // clear previous error
        }}
      />
      <label htmlFor="refurbished">Refurbished</label> <br />
      {productFreshnessError && <span className="error">{productFreshnessError}</span>}
      <br /><br/>
      <label htmlFor="myFile">Image of Product </label>
      <input // Input untuk upload gambar
        type="file"
        accept="image/*"
        id="myFile"
        name="myFile"
        onChange={(e) => {
          const file = e.target.files[0];
          setProductImage(file);
          setProductImageError(""); // clear previous error
        }}
      />
      {productImageError && <span className="error">{productImageError}</span>}
      <br /><br/>
      <label htmlFor="description">Additional Description </label>
      <br />
      <textarea name="description" id="description" cols="36" rows="10" defaultValue={""}></textarea>
      <br /><br/>
      <label>Product Price : </label> <br />
      <input
        type="number"
        value={productPrice}
        onChange={(e) => {
          setProductPrice(e.target.value);
          setProductPriceError(""); // clear previous error
        }}
      />
      {productPriceError && <span className="error">{productPriceError}</span>}
      <br />
      <br />
      <button style={{backgroundColor: '#0D6EFD', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer'}} onClick={addProduct}>Submit</button>
      <br /> <br />
      <h2>Table List Product</h2>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Product Name</th>
            <th>Product Category</th>
            <th>Product Freshness</th>
            <th>Product Image</th>
            <th>Product Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr onClick={() => navigate(`/${product.id}`)} key={product.id}>
              <td>{index + 1}</td>
              <td>{product.productName}</td>
              <td>{product.productCategory}</td>
              <td>{product.productFreshness}</td>
              <td>{product.productImage}</td>
              <td>{product.productPrice}</td>
              <td>
                <button onClick={() => handleDelete(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <new Text /><br />
      <Link to="/">
      <button style={{ backgroundColor: '#0D6EFD', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Landing Page</button>
      </Link>
    </div>
  );
}

export default Mycomponent;
