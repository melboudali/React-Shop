import styled, { css } from 'styled-components';
import { extraSmallDevices } from '../../Config/StyledComponents';

const RateStyle = css`
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  margin: 5px 0;
  font-size: 0.9rem;
  color: rgb(107, 107, 107);
`;

export const Container = styled.div`
  width: 100%;
  padding: 20px 50px;
  min-height: 400px;
  ${extraSmallDevices} {
    padding: 20px;
  }
`;

// Images
export const ImagesContainer = styled.div`
  width: 100%;
`;

export const MainImageContainer = styled.div`
  position: relative;
  display: block;
  overflow: hidden;
  width: 100%;
  height: 550px;
  ${extraSmallDevices} {
    height: 400px;
  }
`;

export const MainImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${({ src }) => src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  ${({ screenX, screenY }) => `transform-origin: ${screenX}% ${screenY}%`};
  /* transition: transform 0.6s ease-out; */
  &:hover {
    cursor: zoom-in;
    transform: scale(1.6);
  }
`;

export const OtherImagesContainer = styled.div`
  width: 100%;
  height: 80px;
  text-align: center;
`;

export const OtherImageContainer = styled.div`
  display: inline-block;
  width: 80px;
  height: 100%;
  padding: 10px;
`;

export const OtherImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${({ src }) => src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  &:hover {
    outline: 2px solid rgba(0, 0, 0, 0.5);
  }
`;

// Title & Description
export const ProductTitle = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: rgba(66, 66, 66);
  text-transform: uppercase;
`;

export const RateOrdersContainer = styled.div`
  display: flex;
`;

export const Rate = styled.span`
  ${RateStyle}
`;

export const Svg = styled.svg`
  stroke: none;
  width: 18px;
  height: 18px;
  stroke-width: 1;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: rgb(107, 107, 107);
  margin-right: 5px;
`;

export const Orders = styled.span`
  ${RateStyle}
  &::before {
    position: relative;
    content: '';
    height: 4px;
    width: 4px;
    border-radius: 5px;
    background-color: rgb(107, 107, 107);
    margin: 0 5px;
  }
`;

export const ProductDesc = styled.p`

`

// Comments
