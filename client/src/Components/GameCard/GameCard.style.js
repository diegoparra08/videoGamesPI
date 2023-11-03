import styled from 'styled-components';

export const SingleCard = styled.div`
width: 185px;
display: flex;
flex-direction: column-reverse;
/* border: 2px solid #01c4e7;  */
border-radius: 5px;
padding: 1px;
margin: 20px;

background-color: #273469;
box-shadow: -3px 6px 8px rgba(0, 0, 0, .9);
color: #48ACF0;
font-family: 'Bangers';

&:hover {
    transform: scale(1.10);
}
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
border-radius: 5px;
height: 120px;
margin-top: 2px;
margin-bottom: 10px;
box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`
