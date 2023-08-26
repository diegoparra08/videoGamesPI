import { useDispatch } from "react-redux";

import { reset } from "../../Redux/actions";

import { SingleButton } from "./GenreButton.styles";

function ResetButton(){

    const dispatch = useDispatch();

    function handleResetClcik(){
        dispatch(reset());
    };

    return(
        <SingleButton onClick={handleResetClcik}>
            Reset Filters
        </SingleButton>
    )

};

export default ResetButton;