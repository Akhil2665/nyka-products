import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import products from "../Data/Products";

import './ProductsList.css'

function ProductList() {
  return (
    <div className="product-list-container">
      <h1>Nykaa Beauty Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
