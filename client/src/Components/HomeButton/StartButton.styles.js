import { keyframes } from "styled-components";
import styled from 'styled-components';


const tingling = keyframes`
  0% {
    background-color: #03a9;
  }
  50% {
    background-color: #ffffff; 
   
  }
  100% {
    background-color: #03a9; 
  }
`

export const StartButtonClick = styled.button`
animation: ${tingling} 2s infinite;
font-family: 'bangers';
background: #03a9;
color: #39ff14;
padding: 10px 20px; 
font-size: 18px;
@media (max-width: 400px) {
   font-size: 15px;
  }

  @media (max-width: 800px) {
    font-size: 12px;
  }

`