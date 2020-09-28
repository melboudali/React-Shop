import styled, { createGlobalStyle } from 'styled-components';
import Container from '@material-ui/core/Container';

export const GlobalStyle = createGlobalStyle`
  html {
    position: relative;
    min-height: 100%;
    /* scroll-behavior: smooth; */
    overflow-y: scroll;
    /* overflow-y: overlay; */
  };

  * {
    box-sizing: border-box;
  };

  body {
    margin: 0;
    /* Footer height */
    padding: 0;
    font-family: 'Roboto' !important;
    background-color: rgb(244, 244, 244);
  };

  /* ScrollBar */
  ::-webkit-scrollbar {
    width: 4px !important;
  };
  
  /* Track */
  ::-webkit-scrollbar-track {
    background: rgb(255, 255, 255);
  };

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgb(70, 70, 70);
    /* border-radius: 5px; */
  };

  /* Handle on hover */
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
