import { useNavigate } from "react-router-dom";

import { StartButtonClick } from "./StartButton.styles";


function StartButton() {

    const navigate = useNavigate();

    function navigateHandler() { 
        navigate('/home')
    };

    return (
        <StartButtonClick onClick={navigateHandler}>Click Here To Start!</StartButtonClick>
    )
};

export default StartButton;