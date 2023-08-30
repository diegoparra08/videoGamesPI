import { useDispatch } from "react-redux";
import { filterByGenre } from "../../Redux/actions";


import { SingleButton } from "./GenreButton.styles";

function GenreButton({genre, activeGenre, setActiveGenre, page, setPage}){


    const dispatch = useDispatch();
    const { name, id } = genre;

    function handleGenreClick(){
        console.log('Dispatching filterByGenre:', id);
        dispatch(filterByGenre(id));
        setActiveGenre(id);
        setPage(1);
    }

    return (
        <SingleButton isActive={activeGenre === id} onClick={handleGenreClick} >
            <h4>{name}</h4>
        </SingleButton>
    )

};

export default GenreButton;