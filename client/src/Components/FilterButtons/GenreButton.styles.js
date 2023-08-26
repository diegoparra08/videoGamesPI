import styled from 'styled-components';

export const SingleButton = styled.button`
display: flex;
align-items: center;
justify-content: center; 
border-color: solid #4a09c1;
border-radius: 7px;
color: #4a09c1;
width: 115px;
background-color: #01c4e7;
box-shadow: -3px 6px 8px rgba(0, 0, 0, .1);
height: 30px;
font-family: Bangers;

white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis;

  &:hover {
    transform: scale(1.05);
}

${props =>
    props.isActive &&
    `
    background-color: #4a09c1;
    color: #01c4e7;
  `}
`

