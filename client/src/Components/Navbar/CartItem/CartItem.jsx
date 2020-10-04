import React, { memo } from 'react';
import { connect } from 'react-redux';
import { deleteItem } from '../../../Redux/Cart/CartActions';
import './CartItem.scss';
import PropTypes from 'prop-types';

const CartItem = ({ Item: { id, name, firstImageUrl, newPrice, quantity }, deleteItem }) => {
  return (
    <div className='CartItem'>
      <div className='ImgContainer' style={{ backgroundImage: `url(${firstImageUrl})` }} />
      <div className='ItemDetails'>
        <span className='DeleteButton' onClick={() => deleteItem(id, quantity)}>
          <svg viewBox='0 0 24 24'>
            <path stroke='none' d='M0 0h24v24H0z' />
            <line x1='4' y1='7' x2='20' y2='7' />
            <line x1='10' y1='11' x2='10' y2='17' />
            <line x1='14' y1='11' x2='14' y2='17' />
            <path d='M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12' />
            <path d='M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3' />
          </svg>
        </span>
        <span className='Name'>{name}</span>
        <span className='Price'>
          {quantity} x ${parseFloat(newPrice).toFixed(2)}
        </span>
        <span className='Total'>${parseFloat(quantity * newPrice).toFixed(2)}</span>
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

export default memo(connect(null, { deleteItem })(CartItem));
