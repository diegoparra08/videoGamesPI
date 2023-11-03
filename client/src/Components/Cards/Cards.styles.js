import styled from 'styled-components';

export const CardsContainerDiv = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(4, minmax(200px, 1fr));

  @media (max-width: 800px) {
    grid-template-columns: repeat(3, minmax(150px, 1fr));
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, minmax(120px, 1fr)); 
  }

  @media (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr); 
  }
`
export const NoResultsBanerP = styled.h2`
font-family: Bangers;
color: #01c4e7; 
white-space: nowrap;

`
export const NoResultContainer = styled.div`
height: 40vh;
display: flex;

align-items: center;
margin-left: 370px;
`