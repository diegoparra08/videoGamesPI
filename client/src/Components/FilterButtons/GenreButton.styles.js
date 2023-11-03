import styled from 'styled-components';

export const SingleButton = styled.button`
display: flex;
align-items: center;
justify-content: center; 
border-color: solid #4a09c1;
border-radius: 5px;
color: #48ACF0;
width: 115px;
background-color: #273469; 
box-shadow: -3px 6px 8px rgba(0, 0, 0, .1);
height: 30px;
font-family: Bangers;
font-size: 14px;

white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis;

  &:hover {
    transform: scale(1.05);
}

${props =>
    props.isActive &&
    `
    background-color: #48ACF0;
    color: #273469;
  `}
`

