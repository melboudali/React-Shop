import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 20px;
  min-height: 500px;
`;

export const ImagesContainer = styled.div`
  width: 100%;
`;

export const MainImageContainer = styled.div`
  display: block;
  overflow: hidden;
  width: 100%;
  height: 500px;
`;

export const MainImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${({ src }) => src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
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
