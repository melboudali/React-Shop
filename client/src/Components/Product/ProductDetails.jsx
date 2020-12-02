import React from 'react';
import { Container, RateOrdersContainer, ProductTitle, Rate, Svg, Orders } from './Product.Style';
import PropTypes from 'prop-types';

const ProductDetails = ({
  item: {
    id,
    name,
    description,
    colors,
    size,
    oldPrice,
    newPrice,
    firstImageUrl,
    secondImageUrl,
    thirdImageUrl,
    fourthImageUrl,
    rate,
    orders
  }
}) => {
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

      <p>{description}</p>
      {colors.map((color, cid) => (
        <p key={cid} style={{ color: color }}>
          {color}
        </p>
      ))}
      <p>{size}</p>
      <p>{oldPrice}</p>
      <p>{newPrice}</p>
      <p>{}</p>
      <p>{}</p>
    </Container>
  );
};

ProductDetails.propTypes = {};

export default ProductDetails;
