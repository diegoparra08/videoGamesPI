import { useDispatch } from "react-redux";

import { filterByOrigin } from "../../Redux/actions";

import { SingleButtonOrigin, OriginButtonContainerDiv } from "./OriginButton.styles";

function OriginButton() {

    const dispatch = useDispatch();

    function handleOriginClick(origin) {   //hace el despacho de la funcion filterByOrigin con el valor del origen
        dispatch(filterByOrigin(origin)) //que viene del boton
    }

    return (
        <div>
            <h4>By Origin</h4>
            <OriginButtonContainerDiv>
                {["Api", "Data Base"].map(origin =>
                    <SingleButtonOrigin value={origin} onClick={
                        () => handleOriginClick(origin)}>{origin}</SingleButtonOrigin>)}
            </OriginButtonContainerDiv>

        </div>

    )
};

export default OriginButton;