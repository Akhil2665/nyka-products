import React from 'react';
   import './ProductCard.css';
   
   function ProductCard({ product }) {
     return (
       <div className="product-card">
         <img src={product.image} alt={product.name} className="product-image" />
         <div className="product-info">
           <h3>{product.name}</h3>
           <p className="brand">{product.brand}</p>
           <p className="price">₹{product.price}</p>
           <p className="rating">★ {product.rating}</p>
         </div>
       </div>
     );
   }
   
   export default ProductCard;