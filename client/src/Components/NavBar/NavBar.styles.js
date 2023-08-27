import styled from 'styled-components';

export const NavBarContainerNav = styled.nav`

`
export const LandingButton = styled.button`
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
&:active {
    background-color: #4a09c1;
    color: #01c4e7;
}
`

export const ButtonsDiv = styled.div`
display: flex;
flex-direction: row; 
align-items: center;
justify-content: center;
`

export const SearchButton = styled.button`
display: flex;
align-items: center;
justify-content: center; 
border-color: solid #4a09c1;
border-radius: 7px;
color: #4a09c1;
width: 60px;
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
&:active {
    background-color: #4a09c1;
    color: #01c4e7;
}
`
export const SearchInput = styled.input`
display: flex;
align-items: center;
justify-content: center; 
border-color: solid #01c4e7;
border-radius: 7px;
color: #01c4e7;
width: 250px;
background-color:#4a09c1;
box-shadow: -3px 6px 8px rgba(0, 0, 0, .1);
height: 30px;
font-family: Bangers;

white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis;
`

export const SearchForm = styled.form`
display: flex;
flex-direction: row; 
align-items: center;
justify-content: center;
margin-bottom: 10px;
`

export const NavBarContainer = styled.nav`
background-color: rgb(110, 110, 110);
padding: 20px;
`

