import React from 'react';
import Button from '../../SigninPageComponents/SubmitButton/SubmitButton';
import { connect } from 'react-redux';
import { SelectCartItems } from '../../../Redux/Cart/CartSelectors';
import CartItem from '../CartItem/CartItem';
import PropTypes from 'prop-types';
import './CartDropdown.scss';

const CartDropdown = ({ CartItems }) => {
  return (
    <div className='CartDropdown'>
      <div className='CartContainer'>
        {CartItems.length > 0 ? (
          <>
            <div className='classItems'>
              {CartItems.map(Item => (
                <CartItem key={Item.id} Item={Item} />
              ))}
            </div>
            <Button>Go to checkout</Button>
          </>
        ) : (
          <span className='noItems'>no products in the cart.</span>
        )}
      </div>
    </div>
  );
};

CartDropdown.propTypes = {};

const mapStateToProps = state => ({
  CartItems: SelectCartItems(state)
});

export default connect(mapStateToProps, null)(CartDropdown);
