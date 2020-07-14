import React from 'react';
import { connect } from 'react-redux';
import { addItemToCart, deleteItem } from '../../../Redux/Cart/CartActions';
import PropTypes from 'prop-types';
import './CheckoutItem.scss';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import { IoMdTrash } from 'react-icons/io';
import { IconContext } from 'react-icons';
import {
  CheckoutItemContainer,
  ImageContainer,
  ItemName,
  ItemQuantity,
  AiFillMinusCircleStyled,
  QuantityControls,
  ItemPrice,
  RemoveBtn
} from './CeckoutItem.Style';

const CheckoutItem = ({ iid, id, name, price, imageUrl, quantity, addItemToCart, deleteItem }) => {
  return (
    <CheckoutItemContainer id={iid}>
      <ImageContainer>
        <img alt='item' src={imageUrl} />
      </ImageContainer>

      <ItemName>{name}</ItemName>

      <ItemQuantity>
        <QuantityControls
          quantity={quantity}
          onClick={() => quantity > 1 && deleteItem(id, quantity)}>
          {/* <AiFillMinusCircleStyled /> */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='svg'

            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='#2c3e50'
            fill='none'
            stroke-linecap='round'
            stroke-linejoin='round'>
            <path stroke='none' d='M0 0h24v24H0z' />
            <circle cx='12' cy='12' r='9' />
            <line x1='9' y1='12' x2='15' y2='12' />
          </svg>
        </QuantityControls>
        {quantity}
        <QuantityControls
          quantity={2}
          onClick={() =>
            addItemToCart({
              id,
              name,
              price,
              imageUrl
            })
          }>
          {/* TODO: change inline styling later */}
          <IconContext.Provider
            value={{
              color: 'rgb(71, 71, 71)',
              size: '1.2rem',
              style: { verticalAlign: 'middle' }
            }}>
            <AiFillPlusCircle />
          </IconContext.Provider>
        </QuantityControls>
      </ItemQuantity>

      <ItemPrice>${price}.00</ItemPrice>
      <RemoveBtn onClick={() => deleteItem(id, 1)}>
        <IconContext.Provider
          value={{
            color: 'rgb(71, 71, 71)',
            size: '1.2rem',
            style: { verticalAlign: 'middle' }
          }}>
          <IoMdTrash />
        </IconContext.Provider>
      </RemoveBtn>
    </CheckoutItemContainer>
  );
};

CheckoutItem.propTypes = {
  iid: PropTypes.number,
  id: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  imageUrl: PropTypes.string,
  quantity: PropTypes.number,
  addItemToCart: PropTypes.func,
  deleteItem: PropTypes.func.isRequired
};

export default connect(null, { addItemToCart, deleteItem })(CheckoutItem);
