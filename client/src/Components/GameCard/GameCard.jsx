import { useNavigate } from 'react-router-dom'

import { SingleCard, GenreList, CardImg } from './GameCard.style';

function GameCard({ game }) {

    const { name, image, genres, id } = game;
    const navigate = useNavigate();

    function navigateHandler() { //Permite que al hacer click se dirija al detail. se pasa como onClic
        navigate(`/detail/${id}`)
     }

    return (
        <SingleCard onClick={navigateHandler}>
            <GenreList>
                {genres.map(genre => (
                    <li key={genre.name}>{genre.name}</li>
                ))}
            </GenreList>
            <h2>{name}</h2>
            <CardImg src={image} alt={name}/>

        </SingleCard>
    )
};

export default GameCard;