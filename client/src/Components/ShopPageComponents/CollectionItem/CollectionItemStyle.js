import styled, { css } from 'styled-components';
import { Button } from '@material-ui/core';



export const CollectionItemContainer = styled.div`
  height: 400px;
  background-color: white;
  box-shadow: 0 1px 2px 0 rgba(168, 182, 191, 0.6);
  border-radius: 5px;
  transition: all 0.4s;
  margin: 25px;
  padding: 0;
  &:hover {
    box-shadow: 0 10px 20px 0 rgba(168, 182, 191, 0.6);
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 70% !important;
  overflow: hidden;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const ImageAnimation = css`
  ${CollectionItemContainer}:hover & {
    transform: translateY(-100%);
  }
`;

export const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  background-image: url(${({ imgUrl }) => imgUrl});
  background-size: cover;
  background-position: center;
  transition: all 0.4s;
  ${ImageAnimation}
`;

export const SecItemImage = styled.img`
  width: 100%;
  height: 100%;
  background-image: url(${({ imgUrl }) => imgUrl});
  background-size: cover;
  background-position: center;
  transition: all 0.4s;
  ${ImageAnimation}
`;

export const Discount = styled.span`
  position: absolute;
  text-align: center;
  z-index: 1;
  padding: 2px 5px;
  top: 10px;
  right: 0;
  background: rgb(77, 77, 77);
  box-shadow: 0 1px 2px 0 rgba(255, 255, 255, 0.575);
  color: white;
  font-size: 0.9rem;
  font-weight: bold;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const CollectionFooter = styled.div`
  width: 100%;
  height: 30%;
  position: relative;
`;

export const CollectionFooterContainer = styled.div`
  margin: 0;
  padding: 0 4px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  font-weight: bold;
  text-align: left;
`;

export const Name = styled.span`
  width: 100%;
  display: block;
  font-size: 0.9rem;
  letter-spacing: 1px;
  color: rgb(44, 44, 44);
  margin-bottom: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: uppercase;
  padding: 0 4px;
`;

export const Price = styled.span`
  width: 100%;
  display: block;
  margin-bottom: 5px;
  font-size: 0.8rem;
  color: rgb(107, 107, 107);
  padding: 0 4px;
`;

export const OldPrice = styled.span`
  color: rgb(172, 172, 172);
  text-decoration: line-through;
  margin-left: 5px;
`;

export const Rate = styled.span`
  width: 100%;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  margin-bottom: 5px;
  font-size: 0.8rem;
  color: rgb(107, 107, 107);
  padding: 0 4px;
`;

export const Svg = styled.svg`
  margin-right: 5px;
  stroke: none;
  width: 15px;
  height: 15px;
  stroke-width: 1;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: rgb(107, 107, 107);
`;

export const Sold = styled.span`
  width: 100%;
  display: block;
  font-size: 0.8rem;
  margin-bottom: 5px;
  color: rgb(107, 107, 107);
  padding: 0 4px;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
`;
export const AddToCart = styled(Button)`
  width: 100%;
  background: rgb(58, 58, 58);
  color: white;
  font-size: 0.7rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: center;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 5px;
  border-right: 1px solid white;
  line-height: 18px;
  svg {
    margin-right: 10px;
    width: 18px;
    height: 18px;
    fill: white;
  }
`;

export const MoreDetails = styled(Button)`
  width: 10%;
  margin: 0;
  padding: 5px 0;
  background: rgb(58, 58, 58);
  color: white;
  text-transform: uppercase;
  text-align: center;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 5px;
  svg {
    width: 18px;
    height: 18px;
    fill: none;
    stroke-width: 1.5;
    stroke: rgb(209, 209, 209);
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`;
