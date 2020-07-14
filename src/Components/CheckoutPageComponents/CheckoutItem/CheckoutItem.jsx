import React from 'react';
import { connect } from 'react-redux';
import { addItemToCart, deleteItem } from '../../../Redux/Cart/CartActions';
import {
  CheckoutItemContainer,
  ImageContainer,
  ItemName,
  ItemQuantity,
  QuantityControls,
  SvgIcon,
  QuantityCount,
  ItemPrice,
  RemoveBtn
} from './CheckoutItem.Style';
import PropTypes from 'prop-types';

const CheckoutItem = ({ iid, id, name, price, imageUrl, quantity, addItemToCart, deleteItem }) => {
  return (
    <CheckoutItemContainer id={iid}>
      <ImageContainer>
        <img alt='Item Image' src={imageUrl} />
      </ImageContainer>
      <ItemName>{name}</ItemName>
      <ItemQuantity>
        <QuantityControls
          quantity={quantity}
          onClick={() => quantity > 1 && deleteItem(id, quantity)}>
          <SvgIcon viewBox='0 0 24 24'>
            <path stroke='none' d='M0 0h24v24H0z' />
            <circle cx='12' cy='12' r='9' />
            <line x1='9' y1='12' x2='15' y2='12' />
          </SvgIcon>
        </QuantityControls>
        <QuantityCount>{quantity}</QuantityCount>
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
          <SvgIcon viewBox='0 0 24 24'>
            <path stroke='none' d='M0 0h24v24H0z' />
            <circle cx='12' cy='12' r='9' />
            <line x1='9' y1='12' x2='15' y2='12' />
            <line x1='12' y1='9' x2='12' y2='15' />
          </SvgIcon>
        </QuantityControls>
      </ItemQuantity>
      <ItemPrice>${price}.00</ItemPrice>
      <RemoveBtn onClick={() => deleteItem(id, 1)}>
        <SvgIcon viewBox='0 0 24 24'>
          <path stroke='none' d='M0 0h24v24H0z' />
          <line x1='4' y1='7' x2='20' y2='7' />
          <line x1='10' y1='11' x2='10' y2='17' />
          <line x1='14' y1='11' x2='14' y2='17' />
          <path d='M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12' />
          <path d='M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3' />
        </SvgIcon>
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
