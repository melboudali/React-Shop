import styled, { css } from 'styled-components';

const priceAndQuantity = css`
  width: 16.6%;
  text-align: center;
`;

const quantityIcons = css`
  &:hover {
    cursor: pointer;
  }
`;

const disabledQuantityIcons = css`
  opacity: 0.5;
  &:hover {
    cursor: not-allowed;
  }
`;

export const checkoutItemContainer = styled.div`
  background-color: ${({ id }) => (id % 2 === 0 ? '#eee' : '#fff')};
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: 300;
  border-bottom: 2px dashed rgb(216, 216, 216);
  border-right: 2px dashed rgb(216, 216, 216);
  border-left: 2px dashed rgb(216, 216, 216);
`;

export const imageContainer = styled.div`
  ${priceAndQuantity}
  padding: 15px;
  margin: 0;
  img {
    width: 60%;
  }
`;

export const itemName = styled.span`
  width: 40%;
  text-align: center;
`;

export const itemQuantity = styled.span`
  ${priceAndQuantity}
`;

export const quantityControls = styled.span`
  ${({ quantity }) => (quantity > 1 ? quantityIcons : disabledQuantityIcons)}
  padding: 0 10px;
  display: inline-flex;
  vertical-align: middle;
`;

export const svgIcon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: rgb(71, 71, 71);
  stroke-width: 1.5;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
`;

export const quantityCount = styled.span`
  vertical-align: middle;
`;

export const itemPrice = styled.span`
  ${priceAndQuantity}
`;

export const removeBtn = styled.div`
  width: 10%;
  text-align: center;
  cursor: pointer;
`;
