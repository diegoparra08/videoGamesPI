import GameCard from '../GameCard/GameCard'

function Cards({ allGames }) {

    console.log('Hola', allGames);
    
    const gameList = allGames;

    return (
        <div>

            {gameList?.map((game) => (
                <GameCard key={game.id} game={game} />
            ))}

        </div>
    )
};

export default Cards;