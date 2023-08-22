import { useDispatch } from "react-redux";
import { filterByGenre } from "../../Redux/actions";

import { SingleButton } from "./GenreButton.styles";

function GenreButton({genre}){

    const dispatch = useDispatch();
    const { name, id } = genre;

    function handleGenreClick(){
        console.log('Dispatching filterByGenre:', id);
        dispatch(filterByGenre(id))
    }

    return (
        <SingleButton onClick={handleGenreClick}>
            <h4>{name}</h4>
        </SingleButton>
    )

};

export default GenreButton;