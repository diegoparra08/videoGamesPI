import GenreButton from "../FilterButtons/GenreButton";

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

