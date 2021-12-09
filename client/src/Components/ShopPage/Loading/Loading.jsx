import React from 'react';
import styled from 'styled-components';

const LoadingContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const AnimatedSvg = styled.svg`
  width: 100px;
  height: 100px;
  display: block;
  background: none;
  shape-rendering: auto;
`;

const Header = styled.h1`
  font-size: 0.9rem;
  color: rgb(49, 49, 49);
  font-weight: 300;
  letter-spacing: 5px;
  text-transform: uppercase;
`;

const Loading = () => (
  <LoadingContainer>
    <AnimatedSvg viewBox='0 0 100 100'>
      <circle
        cx='50'
        cy='50'
        r='32'
        strokeWidth='3'
        stroke='rgb(49, 49, 49)'
        strokeDasharray='50.26548245743669 50.26548245743669'
        fill='none'
        strokeLinecap='round'
        transform='rotate(300.36 50 50)'>
        <animateTransform
          attributeName='transform'
          type='rotate'
          dur='1.2195121951219512s'
          repeatCount='indefinite'
          keyTimes='0;1'
          values='0 50 50;360 50 50'
        />
      </circle>
      <circle
        cx='50'
        cy='50'
        r='28'
        strokeWidth='3'
        stroke='rgb(173, 173, 173)'
        strokeDasharray='43.982297150257104 43.982297150257104'
        strokeDashoffset='43.982297150257104'
        fill='none'
        strokeLinecap='round'
        transform='rotate(-300.36 50 50)'>
        <animateTransform
          attributeName='transform'
          type='rotate'
          dur='1.2195121951219512s'
          repeatCount='indefinite'
          keyTimes='0;1'
          values='0 50 50;-360 50 50'
        />
      </circle>
    </AnimatedSvg>
    <Header>loading</Header>
  </LoadingContainer>
);

export default Loading;
