import Game from "./Game";
import Backet from "../../assets/img/polygon.png";
import "./Games.scss";
import { useContext } from "react";
import GamesContext from "../../store/games-context";

const Games = ({ letter }) => {
  const firstChrctr = letter.toUpperCase().charAt(0);

  const gameCtx = useContext(GamesContext);
  let gamesArr, games;
  if (gameCtx.filteredGames.length > 0) {
    gamesArr = Object.values(gameCtx.filteredGames);
  } else {
    gamesArr = Object.values(gameCtx.games);
  }

  games = gamesArr.filter((game) =>
    game.name.toLowerCase().startsWith(letter.toLowerCase())
  );

  return (
    <div className="game-container">
      <div className="game-container__backet">
        <img src={Backet} alt="letter" />
        <span>{firstChrctr}</span>
      </div>
      <div className="game-container__games">
        {games.map((g, i) => (
          <Game
            key={i}
            name={g.name}
            description={g.description}
            state={g.state}
            genre={g.genre}
          />
        ))}
      </div>
    </div>
  );
};

export default Games;
