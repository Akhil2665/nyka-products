import React from 'react';
   import { useSelector } from 'react-redux';
   import ProductCard from '../ProductCard/ProductCard.js'
   import {selectAllProducts} from '../../features/ProductSlicer'
   import './ProductsList.css';
   
   function ProductsList() {
     const products = useSelector(selectAllProducts);

     return (
       <div className="product-list-container">
         <h1>Nykaa Beauty Products</h1>
         <div className="product-list">
           {products.map(product => (
             <ProductCard key={product.id} product={product} />
           ))}
         </div>
       </div>
     );
   }
   
   export default ProductsList; 