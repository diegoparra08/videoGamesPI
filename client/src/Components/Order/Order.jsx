import { useDispatch } from "react-redux";

import { orderAlhabetically, orderByRating } from "../../Redux/actions";

function OrderComponent() {

    const dispatch = useDispatch();

    function handleAplhabetically(event){
        dispatch(orderAlhabetically(event.target.value))
    };

    function handleRating(event){
        dispatch(orderByRating(event.target.value))
    };

    return (

        <div>
            <h4>Order</h4>
            <select onChange={handleAplhabetically}>
                <option disabled selected value="">Alphabetically</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
            </select>

            <select onChange={handleRating}>
                <option disabled selected value="">Rating</option>
                <option value="Ascending">Ascending</option>
                <option value="Descending">Descending</option>
            </select>

        </div>


    )


};

export default OrderComponent;