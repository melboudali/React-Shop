import styled from 'styled-components';
import { extraSmallDevices } from '../../Config/StyledComponents';

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

// Comments
