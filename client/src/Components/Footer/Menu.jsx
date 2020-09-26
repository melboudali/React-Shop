import React from 'react';
import { Container, Title } from './Footer.Style';
import PropTypes from 'prop-types';

const Menu = props => {
  return (
    <Container>
      <Title>need help?</Title>
      <ul>
        <ul>about</ul>
        <ul>faqs</ul>
        <ul>privacy policy</ul>
        <ul>terms & conditions</ul>
        <ul>contact</ul>
      </ul>
    </Container>
  );
};

Menu.propTypes = {};

export default Menu;
