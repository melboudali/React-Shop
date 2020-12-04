import React from 'react';
import { Container, Title, Ulist, Litem } from './Footer.Style';

const Menu = () => (
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

export default Menu;
