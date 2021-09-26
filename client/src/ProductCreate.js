import React, { useState } from 'react';
import axios from 'axios';

export default () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')

  const onSubmit = async event => {
    event.preventDefault();

    await axios.post('http://localhost:8080/product/create', {
      name,
      description,
      price
    });

    setName('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            className="form-control"
          />
          <label>Description</label>
          <input
              value={description}
              onChange={e => setDescription(e.target.value)}
              className="form-control"
          />

          <label>Price</label>
          <input
              value={price}
              type="number"
              onChange={e => setPrice(e.target.value)}
              className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};
