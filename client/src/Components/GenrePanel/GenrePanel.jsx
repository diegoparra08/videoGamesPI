import GenreButton from "../GenreButton/GenreButton";

function GenrePanel({allGenres}){

    const genreList = allGenres;

    return (
        <div>

            {genreList?.map((genre) => (
                <GenreButton key={genre.id} genre={genre}/>
            ))}

        </div>
    )

};

export default GenrePanel;

