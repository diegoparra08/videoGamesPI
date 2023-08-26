import { keyframes } from "styled-components";
import styled from 'styled-components';


const tingling = keyframes`
  0% {
    background-color: #03a9; /* Color inicial */
  }
  50% {
    background-color: #ffffff; 
   
    /* Color de fondo de destello */
  }
  100% {
    background-color: #03a9; /* Color inicial */
  }
`

export const StartButtonClick = styled.button`
animation: ${tingling} 2s infinite;
font-family: 'bangers';
background: #03a9;
color: #39ff14;
padding: 10px 20px; 
font-size: 18px;

`