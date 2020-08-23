import styled, { css } from 'styled-components';

export const CartDropdownContainer = styled.div`
  ${({ getShowNav, getNavScrollDown, getShowDropdown }) =>
    (getShowNav || getNavScrollDown) && getShowDropdown
      ? css`
          visibility: visible;
          opacity: 1;
          transform: translateY(-10px);
        `
      : css`
          visibility: hidden;
          opacity: 0;
        `};
  position: absolute;
  width: 240px;
  max-height: 340px;
  min-height: 60px;
  display: flex;
  flex-direction: column;
  top: 95%;
  right: 0;
  z-index: 6;
  padding: 23px 0 0 0;
  background-color: none;
  transition-duration: 0.3s;
`;

export const CartContainer = styled.div`
  max-height: 317px;
  min-height: 60px;
  position: relative;
  width: 100%;
  padding: 0 0 0 4px;
  text-align: center;
  background-color: white;
  box-shadow: 0px 0px 5px 2px #0000002d;
`;

export const NoItems = styled.span`
  position: absolute;
  width: 100%;
  font-size: 0.6rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: rgb(53, 53, 53);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ClassItems = styled.div`
  max-height: 257px;
  overflow-y: scroll;
  width: 100%;
  padding: 0;
`;
