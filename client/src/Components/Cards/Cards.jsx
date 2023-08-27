import GameCard from '../GameCard/GameCard'
import { CardsContainerDiv, NoResultsBanerP, NoResultContainer } from './Cards.styles';

function Cards({ allGames }) {

    console.log('Hola', allGames);
    
    const gameList = allGames;

    return (
        <CardsContainerDiv>

{gameList.length > 0 ? (
                gameList.map((game) => (
                    <GameCard key={game.id} game={game} />
                ))
            ) : (
                <NoResultContainer>
                <NoResultsBanerP>No results Sorry! Try a different search.</NoResultsBanerP>
                </NoResultContainer>
            )}

        </CardsContainerDiv>
    )
};

export default Cards;