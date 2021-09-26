import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default () => {
  const [products, setProducts] = useState({});

  const fetchProducts = async () => {
    const res = await axios.get('http://localhost:8080/product/list');
    console.log(res.data);
    setProducts(res.data);
  };
  const buyProduct = async (ids) => {
    console.log(ids);
    const res = await axios.post('http://localhost:8080/product/buy', {ids});
    console.log(res)
    if(res) {
      alert('Order is successful ');
    } else {
      alert('Order failed ');
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const renderedPosts = Object.values(products).map(product => {
    return (
      <div
        className="card"
        style={{ width: '30%', marginBottom: '20px' }}
        key={product._id}
      >
        <div className="card-body">
          <h3>{product.name}</h3>
        </div>
        <div className="card-body">
          <p>{product.description}</p>
        </div>
        <div className="card-body">
          <p>BDT {product.price}</p>
        </div>
        <button onClick={() => {
          buyProduct([product._id]);
        }} className="btn btn-primary">
          Buy now
        </button>
      </div>
    );
  });

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPosts}
    </div>
  );
};
