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
  align-items: center;
`;

export const LoadingText = styled.p`
  margin-right: 10px;
`;

export const LoadingBar = styled.div`
  width: 100px;
  height: 4px;
  /* background-color: #ccc;
  filter: brightness(1.75); */
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