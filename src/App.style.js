import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    min-height: '100%';
    scroll-behavior: smooth;
    overflow-y: overlay;
  };

  * {
    box-sizing: border-box;
  };

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto';
    background-color: rgb(249, 249, 249);
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

export default GlobalStyle;
