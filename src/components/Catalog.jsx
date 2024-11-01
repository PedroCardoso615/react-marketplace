import React from 'react';
import useFirestore from '../hooks/useFirestore';


function Catalog() {
  const products = useFirestore('products');


  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price} - {product.hasPic ? 'Has a Picture' : 'No Picture'} - {product.yearPro}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Catalog;