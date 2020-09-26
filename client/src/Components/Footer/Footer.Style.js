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

//Menu
export const Ulist = styled.ul`
  width: 100%;
  padding: 0;
  margin: 10% 0 0 0;
`;

export const Litem = styled.li`
  position: relative;
  width: fit-content;
  margin: 0 0 10px 0;
  list-style: none;
  letter-spacing: 3px;
  text-transform: uppercase;
  left: 50%;
  transform: translate(-50%);
  z-index: 0;
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 0;
    width: 100%;
    background: #3f0fff;
    transition: height 0.4s;
    z-index: -1;
  }
  &:hover {
    a {
      color: rgb(218, 218, 218);
    }
    &:after {
      height: 50%;
    }
  }
  a {
    text-decoration: none;
    font-size: 0.9rem;
    color: rgb(126, 126, 126);
    transition: color 0.4s;
  }
`;

// SocialMedia Icons
export const SvgContainer = styled.div`
  margin: 20% 0;
`;

export const Link = styled.a`
  text-decoration: none;
`;

export const Svg = styled.svg`
  width: 48px;
  height: 48px;
  margin: 0 15px;
  stroke-width: 1.5;
  stroke: rgb(126, 126, 126);
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: all 0.2s;
  &:hover {
    cursor: pointer;
    stroke: ${({ color }) => color};
    transform: translateY(-6%) scale(1.1);
  }
`;
