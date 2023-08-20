import { SingleCard, GenreList } from './GameCard.style';

function GameCard({ game }) {

    const { name, image, genres } = game;
    console.log(game);
    return (
        <SingleCard>
            <GenreList>
                {genres.map(genre => (
                    <li key={genre.name}>{genre.name}</li>
                ))}
            </GenreList>
            <h2>{name}</h2>
            <img src={image} alt={name} />

        </SingleCard>
    )
};

export default GameCard;