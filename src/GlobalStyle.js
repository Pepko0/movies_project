import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html { 
        box-sizing: border-box;
      }   
      
      *, ::after, ::before {
        box-sizing: inherit;
      }
      
      body {
        background: white;
        font-family: ${({ theme }) => theme.font.inter};

        @media(max-width: ${({ theme }) => theme.media.tablet}){
          padding:5px;
        }
      }
`;
