import styled, { keyframes } from 'styled-components';

export const loadingAnimation = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Agrega esta línea para centrar horizontalmente */
  height: 100vh;

background-color: #333333;
border-radius: 5px; 
box-shadow: 0px 0px 10px rgba(51, 51, 51, 0.7); 
background: linear-gradient(to bottom, #333333, #2e2e2e);
  
`;

export const LoadingText = styled.p`
  margin-right: 10px;
  font-family: 'Bangers';
  font-size: 48px;
  color: #01c4e7;
  filter: brightness(1.75);
`;

export const LoadingBar = styled.div`
  width: 150px;
  height: 10px;
  background: linear-gradient(45deg, #f06, #fc6);
  border: 1px solid #f06;
  box-shadow: 0 0 10px rgba(255, 102, 0, 0.5);
  color: #fff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
`;

export const LoadingBarFill = styled.div`
  width: 100%;
  height: 100%;
  background-color: #007bff;
  position: absolute;
  animation: ${loadingAnimation} 1s infinite;
`;

export const HomeContainerDiv = styled.div`

box-shadow: 0px 0px 10px rgba(51, 51, 51, 0.7); 
background: linear-gradient(to right, #111D4A, #065A82);
`

export const SidePanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  padding: 10px;
  margin-left:45px;

`;

export const ContentContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center; 
padding: 5px;
`;

export const CardContainer = styled.div`
margin-left:70px;
`;
export const ByGenreBannerH4 = styled.h4`
font-family: Bangers;
margin-top: 20px;
margin-bottom: 10px;
margin-right: 35px;
`
export const PaginationDiv = styled.div`
margin-top: 5px;
`
