import React from 'react';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import './CartDropdown.scss';

const CartDropdown = ({ closeButton }) => {
  return (
    <div className='CartDropdown'>
      <div className='CartContainer'>
        <div className='classItems'>
          <Button className='closeButton' onClick={closeButton}>
            Close
          </Button>
          <Button />
        </div>
      </div>
    </div>
  );
};

CartDropdown.propTypes = {};

export default CartDropdown;
