import styled from 'styled-components';

export const CardsContainerDiv = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(4, minmax(200px, 1fr)); /* 4 tarjetas por fila por defecto */

  @media (max-width: 800px) {
    grid-template-columns: repeat(3, minmax(150px, 1fr)); /* 3 tarjetas por fila en dispositivos de ancho <= 800px */
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, minmax(120px, 1fr)); /* 2 tarjetas por fila en dispositivos de ancho <= 600px */
  }

  @media (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr); /* 1 tarjeta por fila en dispositivos de ancho <= 400px */
  }
`;