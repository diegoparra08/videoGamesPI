import styled from 'styled-components';

export const FormItSelf = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center; 
padding: 50px 200px 100px 200px;
`

export const SearchInput = styled.input`
display: flex;
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
export const DescriptionBanner = styled.textarea`
display: flex;
border-color: solid #01c4e7;
border-radius: 7px;
color: #01c4e7;

background-color:#4a09c1;
box-shadow: -3px 6px 8px rgba(0, 0, 0, .1);

font-family: Bangers;
font-size: 15px;
  
white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis;

  @media (max-width: 400px ) {
    width: 250px;
    height: 55px;
  }

  @media (max-width: 600px ) {
    width: 350px;
    height: 75px;
  }

  @media (max-width: 800px ) {
    width: 450px;
    height: 85px;
  }
`
export const SelectOptions = styled.select`
display: flex;
border-color: solid #01c4e7;
border-radius: 7px;
color: #01c4e7;
width: 250px;
background-color:#4a09c1;
box-shadow: -3px 6px 8px rgba(0, 0, 0, .1);
height: 30px;
font-family: Bangers;
font-size: 18px;

white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis;
`
export const CreateButton = styled.button`
display: flex;
align-items: center;
justify-content: center; 
border-color: solid #4a09c1;
border-radius: 7px;
margin-top: 10px;
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

`

export const ButtonsDiv = styled.div`
display: flex;
flex-direction: row; 
align-items: center;
justify-content: center;
`
export const CreateTitleH2 = styled.h2`
font-family: Bangers;
`
export const CreateLabels = styled.label`
font-family: Bangers;
margin-top: 5px;
`
export const ErrorBanners = styled.p`
font-family: Bangers;
color: white;
`
export const Xbutton = styled.button`
display: flex;
align-items: center;
justify-content: center; 
border-color: solid #4a09c1;
border-radius: 7px;
color: #4a09c1;
width: 25px;
background-color: #01c4e7;
box-shadow: -3px 6px 8px rgba(0, 0, 0, .1);
height: 20px;
font-family: Bangers;
margin-left: 3px;

white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis;

  &:hover {
    transform: scale(1.05);
}
`
export const XButtonSpan = styled.span`
display: flex;
flex-direction: row; 
align-items: center;
justify-content: center;
font-family: bangers;
`