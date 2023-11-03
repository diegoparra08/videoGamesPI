import styled from 'styled-components';



export const SingleButtonPag = styled.button`
display: flex;
align-items: center;
justify-content: center; 
border-color: solid #4a09c1;
border-radius: 7px;
color: #48ACF0;
width: 30px;
height: 30px;
background-color: #273469;
box-shadow: -3px 6px 8px rgba(0, 0, 0, .9);
margin: 1px;
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
    background-color: #48ACF0;
    color: #273469;
  `}
`
export const ButtonNextPrev = styled.button`
display: flex;
align-items: center;
justify-content: center; 
border-color: solid #4a09c1;
border-radius: 7px;
color: #48ACF0;
width: 60px;
height: 30px;
margin: 2px;
background-color: #273469;
box-shadow: -3px 6px 8px rgba(0, 0, 0, .9);
font-family: Bangers;

white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis;

  &:hover {
    transform: scale(1.05);
}
`

export const PagContainerDiv = styled.div`
display: flex;

`
