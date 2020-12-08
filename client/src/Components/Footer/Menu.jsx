import React from 'react';
import { FooterComponentsContainer, Title, Ulist, Litem } from './Footer.Style';

const Menu = () => (
  <FooterComponentsContainer>
    <Title>need help?</Title>
    <Ulist>
      <Litem>
        <a href='https://elboudali.com/'>about</a>
      </Litem>
      <Litem>
        <a href='https://elboudali.com/'>faqs</a>
      </Litem>
      <Litem>
        <a href='https://elboudali.com/'>privacy policy</a>
      </Litem>
      <Litem>
        <a href='https://elboudali.com/'>terms & conditions</a>
      </Litem>
      <Litem>
        <a href='https://elboudali.com/'>contact</a>
      </Litem>
    </Ulist>
  </FooterComponentsContainer>
);

export default Menu;
