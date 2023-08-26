import styled from 'styled-components';



import LandingPic from '../../Images/landing4.png'

export const Landing = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-image:  url(${LandingPic});
background-size: 90%;
background-attachment: fixed;
border: 1px solid #f06;
box-shadow: 0 0 10px rgba(255, 102, 0, 0.5);
color: #fff;
text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
position: relative;
overflow: hidden;
height: 100%;
`

export const WelcomeTitle = styled.h1`
margin-top: 120px;
margin-bottom: 220px;
background-color: whitesmoke;
opacity: 0.98;
border-radius: 10px; 
font-family: 'Bangers';
color: #ff9900;
font-size: 36px;
`


