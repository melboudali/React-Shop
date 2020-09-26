import React from 'react';
import { Container, Title, Ulist, Litem } from './Footer.Style';
import PropTypes from 'prop-types';

const Menu = props => {
  return (
    <Container>
      <Title>need help?</Title>
      <Ulist>
        <Litem>
          <a href='#'>about</a>
        </Litem>
        <Litem>
          <a href='#'>faqs</a>
        </Litem>
        <Litem>
          <a href='#'>privacy policy</a>
        </Litem>
        <Litem>
          <a href='#'>terms & conditions</a>
        </Litem>
        <Litem>
          <a href='#'>contact</a>
        </Litem>
      </Ulist>
    </Container>
  );
};

Menu.propTypes = {};

export default Menu;
