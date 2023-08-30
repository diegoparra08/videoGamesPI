import { useState } from 'react';

import GenreButton from "../FilterButtons/GenreButton";
import { GenrePanelDiv } from "./GenrePanel.styles";

function GenrePanel({allGenres, page, setPage}){

    const genreList = allGenres;

    const [activeGenre, setActiveGenre] = useState(null);

    return (
        <GenrePanelDiv>

            {genreList?.map((genre) => (
                <GenreButton key={genre.id} 
                genre={genre}
                activeGenre={activeGenre} // Pasa el estado activeGenre
          setActiveGenre={setActiveGenre}
          page={page}
          setPage={setPage}
          />
            ))}

        </GenrePanelDiv>
    )
};

export default GenrePanel;

