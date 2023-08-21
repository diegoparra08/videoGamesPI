import { useDispatch } from "react-redux";

import { filterByOrigin } from "../../Redux/actions";

import { SingleButton } from "./GenreButton.styles";


function OriginButton(){

    const dispatch = useDispatch();
   
    

    function handleOriginClick(origin){
        dispatch(filterByOrigin(origin))
        console.log('dentro de button',origin);
    }

    return(
        <div>
            {["Api", "Data Base"].map(origin => 
            <SingleButton value={origin} onClick={() => handleOriginClick(origin)}>{origin}</SingleButton>)}

        {/* {["Api", "Data Base"].map(origin => <SingleButton value={origin} onClick={handleGenreClick}>{origin}</SingleButton>)} */}
        </div>
    )
};

export default OriginButton;