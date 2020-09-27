import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SectionTitle = ({ title }) => (
  <Title>
    <span>{title}</span>
  </Title>
);

const Title = styled.h1`
  margin: 40px 0;
  padding: 0;
  text-align: center;
  position: relative;
  width: 100%;
  &:after {
    content: '';
    width: 100%;
    height: 1px;
    top: 50%;
    left: 0;
    position: absolute;
    background-image: linear-gradient(
      to left,
      #f4f4f4,
      #e6e6e6,
      #d9d9d9,
      #cbcbcb,
      #bebebe,
      #bebebe,
      #bebebe,
      #bebebe,
      #cbcbcb,
      #d9d9d9,
      #e6e6e6,
      #f4f4f4
    );
  }
  span {
    color: rgb(244, 244, 244) !important;
    letter-spacing: 5px;
    text-transform: uppercase;
    font-weight: bold;
    padding: 10px 30px;
    background-color: rgb(49, 49, 49) !important;
    width: fit-content;
    position: relative;
    z-index: 1;
    display: inline-block;
    border-radius: 5px;
    font-size: 1.2rem;
    box-shadow: 3px 3px 0px 2px rgb(173, 173, 173);
  }
`;

SectionTitle.propTypes = { title: PropTypes.string.isRequired };

export default SectionTitle;
