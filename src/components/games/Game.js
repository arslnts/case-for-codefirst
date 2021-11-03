import "./Game.scss";

const Game = ({ name, description, state, genre }) => {
  return (
    <div className="game">
      <h3 className="game__name">{name}</h3>
      <p className="game__description">{description}</p>
      <div className="game__sub-container">
        <span className="game__state">state: {state}</span>
        <span className="game__genre">genre: {genre.map((g) => `${g} `)}</span>
      </div>
    </div>
  );
};

export default Game;
