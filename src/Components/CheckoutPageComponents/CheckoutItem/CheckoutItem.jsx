import React from 'react';
import PropTypes from 'prop-types';
import './CheckoutItem.scss';

const CheckoutItem = ({ iid, name, price, imageUrl, quantity }) => {
  return (
    <div className='CheckoutItem' style={{ backgroundColor: iid % 2 === 0 ? '#eee' : '#fff' }}>
      <div className='ImageContainer'>
        <img alt='item' src={imageUrl} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>&#10092;{quantity}&#10093;</span>
      <span className='price'>${price}.00</span>
      <div className='RemoveBtn'>
        {/* <i className='fad fa-trash' /> */}
        &#10005;
      </div>
    </div>
  );
};

CheckoutItem.propTypes = {};

export default CheckoutItem;
