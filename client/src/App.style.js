import styled, { createGlobalStyle } from 'styled-components';
import Container from '@material-ui/core/Container';

export const GlobalStyle = createGlobalStyle`
  html {
    position: relative;
    min-height: 100%;
    overflow-y: scroll;
  };

  * {
    box-sizing: border-box;
  };

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto' !important;
    background-color: rgb(244, 244, 244);
  };

  ::-webkit-scrollbar {
    width: 4px !important;
  };
  
  ::-webkit-scrollbar-track {
    background: rgb(255, 255, 255);
  };

  ::-webkit-scrollbar-thumb {
    background: rgb(70, 70, 70);
  };

  ::-webkit-scrollbar-thumb:hover {
    background: rgb(126, 126, 126);
  };
`;

export const NavbarDivider = styled.div`
  padding-top: 75px;
`;

export const StyledContainer = styled(Container)`
  margin: 0 0 50px 0;
  min-height: 70vh;
  position: relative;
`;
