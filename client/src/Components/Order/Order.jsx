import { useDispatch } from "react-redux";

import { orderAlhabetically, orderByRating } from "../../Redux/actions";

import { OrderSelect, OrderContainerDiv } from './Order.styles'

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

            <OrderContainerDiv>
            
            <OrderSelect onChange={handleAplhabetically}>
                <option disabled selected value="">Alphabetically</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
            </OrderSelect>

            <OrderSelect onChange={handleRating}>
                <option disabled selected value="">Rating</option>
                <option value="Ascending">Ascending</option>
                <option value="Descending">Descending</option>
            </OrderSelect>

        </OrderContainerDiv>

        </div>
        


    )


};

export default OrderComponent;