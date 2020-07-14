import styled, { css } from 'styled-components';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';

const PriceAndQuantity = css`
  width: 16.6%;
  text-align: center;
`;

const QuantityIcons = css`
  padding: 0 10px;
  &:hover {
    cursor: pointer;
  }
`;

const DisabledQuantityIcons = css`
  opacity: 0.5;
  padding: 0 10px;
  &:hover {
    cursor: not-allowed;
  }
`;

export const CheckoutItemContainer = styled.div`
  background-color: ${({ id }) => (id % 2 === 0 ? '#eee' : '#fff')};
  width: 100%;
  display: flex;
  font-size: 16px;
  align-items: center;
  font-weight: 300;
  border-bottom: 2px dashed rgb(216, 216, 216);
  border-right: 2px dashed rgb(216, 216, 216);
  border-left: 2px dashed rgb(216, 216, 216);
`;

export const ImageContainer = styled.div`
  width: 16.6%;
  padding: 15px;
  text-align: center;
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
  display: inline;
  align-items: center;
  .svg {
    color: rgb(71, 71, 71);
    width: 50px;
    height: 50px;
    vertical-align: middle;
  }
`;

export const AiFillMinusCircleStyled = styled(AiFillMinusCircle)`
  color: rgb(71, 71, 71);
  font-size: 1.2rem;
`;

export const ItemPrice = styled.span`
  ${PriceAndQuantity}
`;

export const RemoveBtn = styled.div`
  width: 10%;
  text-align: center;
  cursor: pointer;
`;
