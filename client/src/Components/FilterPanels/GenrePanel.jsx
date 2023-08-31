import { useState } from 'react';

import GenreButton from "../FilterButtons/GenreButton";
import { GenrePanelDiv } from "./GenrePanel.styles";

function GenrePanel({allGenres, setPage, setSearchResultsFound}){

    const genreList = allGenres;

    const [activeGenre, setActiveGenre] = useState(null);

    return (
        <GenrePanelDiv>

            {genreList?.map((genre) => (
                <GenreButton key={genre.id} 
                genre={genre}
                activeGenre={activeGenre} // Pasa el estado activeGenre
          setActiveGenre={setActiveGenre}
          setPage={setPage}
          setSearchResultsFound={setSearchResultsFound}
          />
            ))}

        </GenrePanelDiv>
    )
};

export default GenrePanel;

