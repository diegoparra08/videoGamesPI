import GenreButton from "../FilterButtons/GenreButton";
import { GenrePanelDiv } from "./GenrePanel.styles";

function GenrePanel({allGenres}){

    const genreList = allGenres;

    return (
        <GenrePanelDiv>
            {/* <h4>By Genre</h4> */}

            {genreList?.map((genre) => (
                <GenreButton key={genre.id} genre={genre}/>
            ))}

        </GenrePanelDiv>
    )
};

export default GenrePanel;

