import { useNavigate } from "react-router-dom";

import { Button, ButtonPic } from "./HomeButton.Styles";
import homeImg from '../../Images/HomeButton.jpg'

function HomeButton(){

    const navigate = useNavigate();

    function navigateHandler() { //Permite que al hacer click se dirija al detail. se pasa como onClic
        navigate('/home')
     }

     return (
        <Button onClick={navigateHandler}>
            <ButtonPic src={homeImg} alt="Home Button" />
            Home
            </Button>
     )
};

export default HomeButton;