import { useDispatch } from "react-redux";

import { reset } from "../../Redux/actions";

function ResetButton(){

    const dispatch = useDispatch();

    function handleResetClcik(){
        dispatch(reset());
    };

    return(
        <button onClick={handleResetClcik}>
            Reset Filters
        </button>
    )

};

export default ResetButton;