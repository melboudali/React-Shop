import styled, { css } from 'styled-components';

const PriceAndQuantity = css`
  width: 16.6%;
  text-align: center;
`;

const QuantityIcons = css`
  &:hover {
    cursor: pointer;
  }
`;

const DisabledQuantityIcons = css`
  opacity: 0.5;
  &:hover {
    cursor: not-allowed;
  }
`;

export const CheckoutItemContainer = styled.div`
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

export const ImageContainer = styled.div`
  ${PriceAndQuantity}
  padding: 15px;
  margin: 0;
  img {
    width: 60%;
  }
`;

export const ItemName = styled.span`
  width: 40%;
  text-align: center;
`;

export const ItemQuantity = styled.span`
  ${PriceAndQuantity}
`;

export const QuantityControls = styled.span`
  ${({ quantity }) => (quantity > 1 ? QuantityIcons : DisabledQuantityIcons)}
  padding: 0 10px;
  display: inline-flex;
  vertical-align: middle;
`;

export const SvgIcon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: rgb(71, 71, 71);
  stroke-width: 1.5;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
`;

export const QuantityCount = styled.span`
  vertical-align: middle;
`;

export const ItemPrice = styled.span`
  ${PriceAndQuantity}
`;

export const RemoveBtn = styled.div`
  width: 10%;
  text-align: center;
  cursor: pointer;
`;
