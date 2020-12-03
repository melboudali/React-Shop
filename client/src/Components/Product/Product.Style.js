import styled, { css } from 'styled-components';
import { extraSmallDevices } from '../../Config/StyledComponents';

const RateStyle = css`
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  text-transform: capitalize;
  color: rgb(107, 107, 107);
`;

const TitleAndPrice = css`
  margin: 0;
  padding: 0;
  font-size: 1.5rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
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
  ${TitleAndPrice}
  color: rgba(66, 66, 66);
  text-transform: uppercase;
`;

export const RateOrdersContainer = styled.div`
  display: flex;
  margin: 10px 0;
`;

export const Rate = styled.span`
  ${RateStyle}
  font-size: 0.9rem;
`;

export const Svg = styled.svg`
  stroke: none;
  width: 18px;
  height: 18px;
  stroke-width: 1;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: rgb(107, 107, 107);
  margin: 0 5px 0 0;
`;

export const Orders = styled.span`
  ${RateStyle}
  font-size: 0.9rem;
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

export const Hr = styled.hr`
  border: 1px solid rgba(209, 209, 209, 0.3);
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const PriceContainer = styled.div`
  display: flex;
  margin: 15px 0;
`;

export const Price = styled.h2`
  ${TitleAndPrice}
  color: rgba(66, 66, 66);
`;

export const OPrice = styled.h2`
  ${TitleAndPrice}
  color: rgb(107, 107, 107);
  text-decoration: line-through;
  &::before {
    position: relative;
    content: '';
    height: 3px;
    width: 10px;
    background-color: rgb(209, 209, 209);
    margin: 0 10px;
  }
`;

export const Discount = styled.span`
  padding: 0 5px;
  margin: 0 0 0 10px;
  background-color: rgba(255, 54, 54, 0.1);
  color: rgba(255, 54, 54, 0.6);
  border-radius: 5px;
  display: inline-flex;
  align-items: center;
  font-size: 1rem;
  font-weight: 500;
`;

const DescAndColors = css`
  color: rgb(107, 107, 107);
  font-size: 0.9rem;
`;

const DescAndColorsTitle = css`
  color: rgba(66, 66, 66);
  margin: 0 10px 10px 0;
  display: block;
  font-size: 1rem;
  font-weight: 500;
  text-transform: capitalize;
`;

export const Desc = styled.div`
  ${DescAndColors}
  margin: 20px 0;
  span {
    ${DescAndColorsTitle}
  }
`;

export const ColorsContainer = styled.div`
  margin: 20px 0;
  span {
    ${DescAndColorsTitle}
  }
`;

export const ColorContainer = styled.div`
  display: inline-flex;
  background-color: ${({ color }) => `${color}`};
  height: 40px;
  width: 40px;
  margin: 0 10px;
  border-radius: 100%;
  box-shadow: 0px 0px 24px -9px rgba(0, 0, 0, 0.75);
  ${({ isSelected }) => (isSelected ? `border: 3px solid rgba(122, 110, 255)` : null)};
  &:hover {
    cursor: pointer;
    border: 3px solid rgba(122, 110, 255);
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  display: block;
  width: 100%;
  margin: 30px 0;
  text-align: center;
  img {
    width: 70%;
  }
`;

const SelectedSize = css`
  border-color: rgba(122, 110, 255);
  color: rgba(122, 110, 255);
`;

export const Size = styled.div`
  margin: 20px 0;
  span {
    ${DescAndColorsTitle}
  }
`;

export const SizeElement = styled.p`
  display: inline-flex;
  padding: 0 5px;
  border: 1px solid rgb(107, 107, 107);
  color: rgb(107, 107, 107);
  margin: 0 10px;
  font-size: 1.3rem;
  font-weight: 500;
  text-transform: uppercase;
  ${({ isSelected }) => (isSelected ? `${SelectedSize}` : null)};
  &:hover {
    cursor: pointer;
    ${SelectedSize}
  }
`;

export const Buttons = styled.div`
  width: 100%;
  text-align: center;
`;

// Comments

export const ReviewContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 20px 0;
  padding: 0 20%;
  ${extraSmallDevices} {
    padding: 0 1%;
  }
`;

export const Review = styled.div`
  width: 100%;
  display: flex;
`;

export const CustomerImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  margin-right: 20px;
`;

export const CommentContainer = styled.div`
  margin: 0;
  width: 100%;
  padding: 10px;
  background-color: white;
  box-shadow: 0px 0px 13px -8px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  &::before {
    content: '';
    width: 0;
    height: 0;
    border-top: 12px solid transparent;
    border-bottom: 12px solid transparent;
    border-right: 12px solid white;
    position: absolute;
    margin-left: -22px;
    top: 13px;
  }
`;

export const CustomerName = styled.div`
  margin-bottom: 5px;
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: capitalize;
  color: rgb(107, 107, 107);
`;

export const RateColorSizeContainer = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

export const CustomerRate = styled.div`
  ${RateStyle}
  margin: 0;
  font-size: 0.8rem;
  svg {
    stroke: none;
    width: 15px;
    height: 15px;
    stroke-width: 1;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: rgb(107, 107, 107);
    margin: 0 5px 0 0;
  }
`;
export const CustomerColor = styled.p`
  ${RateStyle}
  margin: 0;
  font-size: 0.8rem;
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

export const CommentText = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: capitalize;
  line-height: 1.5rem;
  color: rgba(66, 66, 66);
  margin: 10px 0;
  text-align: justify;
`;
