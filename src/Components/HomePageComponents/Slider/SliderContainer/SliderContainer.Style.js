import styled from 'styled-components';
import { ArrowContainer } from '../Arrow/Arrow.Style';

export const Slider = styled.div`
  position: relative;
  height: 450px;
  width: ${({ width }) => `${width}px`};
  overflow: hidden;
  margin: 0 7.5px 19px;
  &:hover {
    ${ArrowContainer} {
      opacity: 1;
      visibility: visible;
      transform: rotateX(180deg);
    }
  }
`;

export const SliderWrapper = styled.div`
  height: 100%;
  transform: ${({ translate }) => `translateX(-${translate}px)`};
  transition: transform 1.6s cubic-bezier(0.57, 0.78, 0.8, -0.45);
  width: ${({ width }) => `${width}px`};
  display: flex;
`;

export const SliderItem = styled.div`
  height: 100%;
  width: 100%;
  background-image: ${({ content }) => `url(${content})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
