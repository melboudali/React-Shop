import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { SelectCartItems } from '../../../Redux/Cart/CartSelectors';
import CartItem from '../CartItem/CartItem';
import Button from '../../SigninPageComponents/SubmitButton/SubmitButton';
import PropTypes from 'prop-types';
import './CartDropdown.scss';

const CartDropdown = ({ CartItems, closeCart, history }) => {
  return (
    <div className='CartDropdown'>
      <div className='CartContainer'>
        {CartItems.length ? (
          <>
            <div className='classItems'>
              {CartItems.map(Item => (
                <CartItem key={Item.id} Item={Item} />
              ))}
            </div>
            <Button
              onClick={() => {
                history.push('/checkout');
                closeCart();
              }}>
              Go to checkout
            </Button>
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

export default withRouter(connect(mapStateToProps, null)(CartDropdown));
