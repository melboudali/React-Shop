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

const BorderColor = `rgb(216, 216, 216)`;

export const CheckoutItemContainer = styled.div`
  background-color: ${({ id }) => (id % 2 === 0 ? '#eee' : '#fff')};
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: 300;
  border-bottom: 2px dashed ${BorderColor};
  border-right: 2px dashed ${BorderColor};
  border-left: 2px dashed ${BorderColor};
`;

export const ImageContainer = styled.div`
  ${priceAndQuantity}
  padding: 15px;
  margin: 0;
  img {
    width: 60%;
  }
`;

export const ItemName = styled.span`
  width: 40%;
  text-align: center;
  font-weight: 500;
  span {
    display: block;
    justify-content: center;
    margin-top: 4px;
    font-size: 0.7rem;
    color: rgb(71, 71, 71);
    letter-spacing: 1px;
  }
`;

export const ItemQuantity = styled.span`
  ${priceAndQuantity}
`;

export const QuantityControls = styled.span`
  ${({ quantity }) => (quantity >= 1 ? quantityIcons : disabledQuantityIcons)}
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
  ${priceAndQuantity}
`;

export const RemoveBtn = styled.div`
  width: 10%;
  text-align: center;
  cursor: pointer;
`;
