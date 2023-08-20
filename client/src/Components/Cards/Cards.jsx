import GameCard from '../GameCard/GameCard'

function Cards({ allGames }) {

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