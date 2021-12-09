import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addItemToCart } from '../../Redux/Cart/CartActions';
import {
  Container,
  RateOrdersContainer,
  ProductTitle,
  Rate,
  Svg,
  Orders,
  Hr,
  PriceContainer,
  Price,
  OPrice,
  Discount,
  Desc,
  Size,
  SizeElement,
  ImageContainer,
  Buttons
} from './Product.Style';
import Colors from './Colors';
import Checkout from '../../Assets/Images/checkout.png';
import SubmitButton from '../SigninSignupPage/SubmitButton/SubmitButton';
import PropTypes from 'prop-types';

const ProductDetails = ({
  item: { id, name, firstImageUrl, description, colors, size, oldPrice, newPrice, rate, orders },
  addItemToCart
}) => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState(size.length > 0 ? size[0] : null);

  return (
    <Container>
      <ProductTitle>{name}</ProductTitle>
      <RateOrdersContainer>
        <Rate>
          <Svg viewBox='0 0 1792 1792'>
            <path d='M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z' />
          </Svg>
          {rate}
        </Rate>
        <Orders>{orders} orders</Orders>
      </RateOrdersContainer>
      <Hr />
      <PriceContainer>
        <Price>US {parseFloat(newPrice).toFixed(2)}</Price>
        <OPrice>{parseFloat(oldPrice).toFixed(2)}</OPrice>
        <Discount>{`-${Math.floor(((oldPrice - newPrice) / oldPrice) * 100)}%`}</Discount>
      </PriceContainer>

      <Hr />
      <Desc>
        <span>description:</span>
        <p>{description}</p>
      </Desc>
      <Colors colors={colors} selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
      {Size.length > 0 && (
        <Size>
          <span>
            size: {typeof selectedSize === 'string' ? selectedSize.toUpperCase() : selectedSize}
          </span>
          {size.map((s, sid) => (
            <SizeElement
              key={sid}
              onClick={() => setSelectedSize(s)}
              title={typeof s === 'string' ? s.toUpperCase() : s}
              isSelected={selectedSize === s}>
              {s}
            </SizeElement>
          ))}
        </Size>
      )}
      <ImageContainer>
        <img src={Checkout} alt='Safe Checkout' />
      </ImageContainer>
      <Buttons>
        <SubmitButton>Buy Now</SubmitButton>
        <SubmitButton
          onClick={() =>
            addItemToCart({
              id,
              name,
              firstImageUrl,
              newPrice,
              colors: [selectedColor],
              size: selectedSize ? [selectedSize] : []
            })
          }>
          Add To Cart
        </SubmitButton>
      </Buttons>
    </Container>
  );
};

ProductDetails.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  firstImageUrl: PropTypes.string,
  description: PropTypes.string,
  colors: PropTypes.array,
  size: PropTypes.array,
  oldPrice: PropTypes.number,
  newPrice: PropTypes.number,
  rate: PropTypes.number,
  orders: PropTypes.number,
  addItemToCart: PropTypes.func.isRequired
};

export default connect(null, { addItemToCart })(ProductDetails);
