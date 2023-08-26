import GameCard from '../GameCard/GameCard'
import { CardsContainerDiv } from './Cards.styles';

function Cards({ allGames }) {

    console.log('Hola', allGames);
    
    const gameList = allGames;

    return (
        <CardsContainerDiv>

            {gameList?.map((game) => (
                <GameCard key={game.id} game={game} />
            ))}

        </CardsContainerDiv>
    )
};

export default Cards;