import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  width: 100%;
  padding: 30px;
`;

export const Title = styled.h1`
  position: relative;
  margin: 0;
  padding: 0;
  color: rgb(218, 218, 218);
  font-size: 1.1rem;
  font-weight: bold;
  letter-spacing: 3px;
  text-transform: uppercase;
  &:after {
    content: '';
    background: white;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
    height: 1.5px;
    width: 60px;
    transition: width 0.4s;
  }
  &:hover {
    cursor: default;
    &:after {
      width: 100px;
    }
  }
`;
