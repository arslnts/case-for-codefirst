import { useContext } from "react";
import GamesContext from "../../store/games-context";

import "./Checkbox.scss";
const Checkbox = ({ name, getCheckedName }) => {
  const gameCtx = useContext(GamesContext);
  const filteredGames = gameCtx.filteredGames;
  const stateGames = gameCtx.stateGames;
  const genreGames = gameCtx.genreGames;

  const changeHandler = (e) => {
    if (e.target.checked) {
      getCheckedName(name);

      if (
        name === "Maintenance" ||
        name === "Patching" ||
        name === "Available"
      ) {
        Object.values(gameCtx.games).forEach((game) => {
          if (game.state.includes(name)) {
            filteredGames.push(game);
            stateGames.push(game);
          }
        });

        gameCtx.setStateGames(stateGames);
        gameCtx.setFilteredGames(filteredGames);
      } else {
        Object.values(gameCtx.games).forEach((game) => {
          if (game.genre.includes(name)) {
            filteredGames.push(game);
            genreGames.push(game);
          }
        });

        const toFindDuplicates = (filteredGames) =>
          filteredGames.filter(
            (item, index) => filteredGames.indexOf(item) !== index
          );
        const duplicateElements = toFindDuplicates(filteredGames);
        gameCtx.setDuplicateElements(duplicateElements);

        const ids = filteredGames.map((g) => g.id);
        const newFilteredGames = filteredGames.filter(
          ({ id }, index) => !ids.includes(id, index + 1)
        );

        gameCtx.setGenreGames(genreGames);
        gameCtx.setFilteredGames(newFilteredGames);
      }

      if (stateGames.length > 0 && genreGames.length > 0) {
        let filtGames = stateGames.filter((element) =>
          genreGames.includes(element)
        );
        if (filtGames.length > 0) {
          gameCtx.setFilteredGames(filtGames);
          gameCtx.fetchError("");
        } else {
          gameCtx.setFilteredGames([]);
          gameCtx.fetchError("No Content");
        }
      }
    } else {
      if (
        name === "Maintenance" ||
        name === "Patching" ||
        name === "Available"
      ) {
        Object.values(filteredGames).forEach((game) => {
          if (game.state.includes(name)) {
            const index = stateGames.indexOf(game);

            filteredGames.splice(index, 1);
            stateGames.splice(index, 1);
          }
          gameCtx.setStateGames(stateGames);
          gameCtx.setFilteredGames(filteredGames);
        });
      } else {
        Object.values(gameCtx.games).forEach((game) => {
          if (game.genre.includes(name)) {
            const index = genreGames.indexOf(game);
            if (genreGames.includes(game)) {
            }
            filteredGames.splice(index, 1);
            genreGames.splice(index, 1);
          }
        });

        filteredGames.push(...gameCtx.duplicateElements);
        gameCtx.setFilteredGames(filteredGames);
        gameCtx.setGenreGames(genreGames);
      }

      if (gameCtx.stateGames.length > 0 && gameCtx.genreGames.length > 0) {
        let filtGames = stateGames.filter((element) =>
          genreGames.includes(element)
        );
        gameCtx.setFilteredGames(filtGames);
        // gameCtx.fetchError("");
        console.log("run");
      }

      if (gameCtx.stateGames.length > 0 && gameCtx.genreGames.length === 0) {
        // gameCtx.fetchError("");
        gameCtx.setFilteredGames(stateGames);
      }
      if (gameCtx.stateGames.length === 0 && gameCtx.genreGames.length > 0) {
        // gameCtx.fetchError("");
        gameCtx.setFilteredGames(genreGames);
      }
      if (gameCtx.stateGames.length === 0 && gameCtx.genreGames.length === 0) {
        // gameCtx.fetchError("");
        gameCtx.setFilteredGames([]);
      }
    }
  };

  return (
    <label className="checkbox-container">
      <span className="checkbox-container__name">{name}</span>
      <input type="checkbox" onChange={changeHandler} />
      <span className="checkbox-container__checkmark"></span>
    </label>
  );
};

export default Checkbox;
