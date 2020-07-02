import React from 'react';
import { connect } from 'react-redux';
import { addItemToCart, deleteItem } from '../../../Redux/Cart/CartActions';
import PropTypes from 'prop-types';
import './CheckoutItem.scss';

const CheckoutItem = ({ iid, id, name, price, imageUrl, quantity, addItemToCart, deleteItem }) => {
  return (
    <div className='CheckoutItem' style={{ backgroundColor: iid % 2 === 0 ? '#eee' : '#fff' }}>
      <div className='ImageContainer'>
        <img alt='item' src={imageUrl} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <span
          className={quantity > 1 ? `quantityControls` : `disabledReducer`}
          onClick={() => quantity > 1 && deleteItem(id, quantity)}>
          <i className='fal fa-less-than' />
        </span>
        {quantity}
        <span
          className='quantityControls'
          onClick={() =>
            addItemToCart({
              id,
              name,
              price,
              imageUrl
            })
          }>
          <i className='fal fa-greater-than' />
        </span>
      </span>
      <span className='price'>${price}.00</span>
      <div className='RemoveBtn' onClick={() => deleteItem(id, 1)}>
        <i className='fad fa-trash' />
        {/* &#10005; */}
      </div>
    </div>
  );
};

CheckoutItem.propTypes = {
  deleteItem: PropTypes.func.isRequired
};

export default connect(null, { addItemToCart, deleteItem })(CheckoutItem);
