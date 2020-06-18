import React from 'react';
import Button from '../../SigninPageComponents/SubmitButton/SubmitButton';
import PropTypes from 'prop-types';
import './CartDropdown.scss';

const CartDropdown = ({ closeButton }) => {
  return (
    <div className='CartDropdown'>
      <div className='CartContainer'>
        <div className='classItems'>
          <span className='closeButton' onClick={closeButton}>
            <i className='fad fa-times-circle errorIcon' />
          </span>
        </div>
        <Button>Go to checkout</Button>
      </div>
    </div>
  );
};

CartDropdown.propTypes = {};

export default CartDropdown;
