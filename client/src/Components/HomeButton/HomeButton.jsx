import { useNavigate } from "react-router-dom";

import { Button, ButtonPic, HomeButtonDiv } from "./HomeButton.Styles";
import homeImg from '../../Images/home.png'

function HomeButton(){

    const navigate = useNavigate();

    function navigateHandler() { 
        navigate('/home')
     }

     return (

        <HomeButtonDiv>

 <Button onClick={navigateHandler}>
            <ButtonPic src={homeImg} alt="Home Button" />
            Home
            </Button>

        </HomeButtonDiv>
       
     )
};

export default HomeButton;