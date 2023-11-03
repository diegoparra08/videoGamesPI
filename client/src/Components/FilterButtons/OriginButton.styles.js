import styled from 'styled-components';

export const SingleButtonOrigin = styled.button`
display: flex;
align-items: center;
justify-content: center; 
border-color: solid #4a09c1;
border-radius: 7px;
color: #48ACF0;
width: 115px;
background-color: #273469;
box-shadow: -3px 6px 8px rgba(0, 0, 0, .9);
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
    background-color: #48ACF0;
    color: #273469;
  `}
`

export const OriginButtonContainerDiv = styled.div`
display: flex;
margin-right: 30px;
`

export const ByOriginBannerH4 = styled.h4`
font-family: Bangers;
margin-top: 10px;
margin-bottom: 10px;
margin-right:35px; 
`