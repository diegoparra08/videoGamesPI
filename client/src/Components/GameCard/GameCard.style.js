import styled from 'styled-components';

export const SingleCard = styled.div`
width: 170px;
display: flex;
flex-direction: column-reverse;
border: 2px solid #01c4e7; 
border-radius: 10px;
padding: 1px;
margin: 20px;
/* margin-top: 50px; */
background-color: #01c4e7;
box-shadow: -3px 6px 8px rgba(0, 0, 0, .9);
color: #4a09c1;
font-family: 'Bangers';
`

export const GenreList = styled.ul`
list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  justify-content: center;
  align-items: center;
  flex-grow: 1; /* Ocupa el espacio restante */
`

export const CardImg = styled.img`
border-radius: 10px;
height: 100px;
margin-top: 2px;
margin-bottom: 10px;
box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`
