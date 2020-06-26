import React from 'react';
import { connect } from 'react-redux';
import { deleteItem } from '../../../Redux/Cart/CartActions';
import './CartItem.scss';
import PropTypes from 'prop-types';

const CartItem = ({ Item: { id, name, imageUrl, price, quantity }, deleteItem }) => {
  const deletingItem = () => {
    deleteItem(id, quantity);
  };
  return (
    <div className='CartItem'>
      <div className='imgContainer' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='ItemDetails'>
        <span className='closeButton' onClick={deletingItem}>
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

CartItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  deleteItem: PropTypes.func
};

export default connect(null, { deleteItem })(CartItem);
