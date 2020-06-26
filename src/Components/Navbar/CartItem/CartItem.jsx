import React from 'react';
import './CartItem.scss';
import PropTypes from 'prop-types';

const CartItem = ({ Item: { name, imageUrl, price, quantity } }) => {
  return (
    <div className='CartItem'>
      <div className='imgContainer' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='ItemDetails'>
        <span className='closeButton'>
          <i className='fad fa-trash' />
        </span>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} x ${price}.00
        </span>
        <span className='priceToPay'>Price: ${quantity * price}.00</span>
      </div>
    </div>
  );
};

CartItem.propTypes = {};

export default CartItem;
