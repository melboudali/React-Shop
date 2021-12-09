import styled from 'styled-components';
import { ArrowContainer } from '../Arrow/Arrow.Style';

const With = ({ width }) => `${width}px`;

export const Slider = styled.div`
  position: relative;
  width: ${With};
  height: 450px;
  margin: 0 7.5px;
  overflow: hidden;
  &:hover {
    ${ArrowContainer} {
      visibility: visible;
      opacity: 1;
      transform: rotateX(180deg);
    }
  }
`;

export const SliderWrapper = styled.div`
  display: flex;
  width: ${With};
  height: 100%;
  transform: ${({ translate }) => `translateX(-${translate}px)`};
  transition: transform 1.6s cubic-bezier(0.57, 0.78, 0.8, -0.45);
`;

export const SliderItem = styled.div`
  height: 100%;
  width: 100%;
  background-image: ${({ content }) => `url(${content})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
