import { useNavigate } from 'react-router-dom'

import { SingleCard, GenreList } from './GameCard.style';

function GameCard({ game }) {

    const { name, image, genres, id } = game;
    const navigate = useNavigate();

    function navigateHandler() { //Permite que al hacer click se dirija al detail. se pasa como onClic
        navigate(`/detail/${id}`)
     }

    return (
        <SingleCard>
            <GenreList>
                {genres.map(genre => (
                    <li key={genre.name}>{genre.name}</li>
                ))}
            </GenreList>
            <h2 onClick={navigateHandler}>{name}</h2>
            <img src={image} alt={name} onClick={navigateHandler}/>

        </SingleCard>
    )
};

export default GameCard;