import React from 'react';
import ProductCreate from './ProductCreate';
import ProductList from './ProductList';

export default () => {
  return (
    <div className="container">
      <h1>Create Post</h1>
      <ProductCreate />
      <hr />
      <h1>Posts</h1>
      <ProductList />
    </div>
  );
};
