import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
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
    padding: 0 0 50px 0;
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

export default GlobalStyle;
