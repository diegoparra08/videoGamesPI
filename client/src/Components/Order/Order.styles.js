import styled from 'styled-components';

export const OrderSelect = styled.select`
display: flex;
align-items: center;
justify-content: center; 
border-color: solid #4a09c1;
border-radius: 7px;
color: #48ACF0;
width: 120px;
height: 30px;
background-color: #273469;
box-shadow: -3px 6px 8px rgba(0, 0, 0, .9);
font-family: Bangers;

white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis;
  margin-bottom: 15px;
  margin-top: 2px;
  margin-left: 3px;

  &:hover {
    transform: scale(1.05);
}
`

export const OrderContainerDiv = styled.div`
display: flex;
`
export const OrderBannerH4 = styled.h4`
font-family: Bangers;
margin: 10px;
`