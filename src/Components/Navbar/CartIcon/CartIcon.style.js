import styled, { css } from 'styled-components';
import IconButton from '@material-ui/core/IconButton';

export const CartIconContainer = styled.div`
  background: none;
  padding: 0 !important;
  display: flex;
  align-items: center;
  justify-content: center;
  .MuiBadge-badge {
    color: rgb(255, 255, 255) !important;
    background-color: rgb(51, 51, 51) !important;
    font-size: 0.8rem !important;
  }
`;

export const Cart = styled(IconButton)`
  width: 100%;
  &:hover {
    background: none !important;
  }
`;
export const CartSvg = styled.svg`
  stroke: rgb(85, 85, 85) !important;
  width: 30px;
  height: 30px;
`;
