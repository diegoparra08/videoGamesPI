import { useDispatch } from "react-redux";

import { filterByOrigin } from "../../Redux/actions";

import { SingleButton } from "./GenreButton.styles";

function OriginButton() {

    const dispatch = useDispatch();

    function handleOriginClick(origin) {   //hace el despacho de la funcion filterByOrigin con el valor del origen
        dispatch(filterByOrigin(origin)) //que viene del boton
    }

    return (
        <div>
            {["Api", "Data Base"].map(origin =>
                <SingleButton value={origin} onClick={
                    () => handleOriginClick(origin)}>{origin}</SingleButton>)}
        </div>
    )
};

export default OriginButton;