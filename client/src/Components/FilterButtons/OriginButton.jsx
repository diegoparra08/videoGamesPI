import { useDispatch } from "react-redux";

import { filterByOrigin } from "../../Redux/actions";

import { ByOriginBannerH4, SingleButtonOrigin, OriginButtonContainerDiv } from "./OriginButton.styles";
import { useState } from "react";

function OriginButton() {

    const dispatch = useDispatch();
    const [isActive, setIsActive] = useState(null);

    function handleOriginClick(origin) {  
        dispatch(filterByOrigin(origin)) 
        setIsActive(origin)
    }

    return (
        <div>
            <ByOriginBannerH4>By Origin</ByOriginBannerH4>
            <OriginButtonContainerDiv>
                {["Api", "Data Base"].map(origin =>
                    <SingleButtonOrigin value={origin} isActive={ origin === isActive}  onClick={
                        () => {handleOriginClick(origin); setIsActive(origin)}}>{origin}</SingleButtonOrigin>)}
            </OriginButtonContainerDiv>

        </div>

    )
};

export default OriginButton;