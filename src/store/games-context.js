import { createContext } from "react";

const GamesContext = createContext({
  games: [],
  loading: true,
  error: "",
  filteredGames: [],
  firstLetters: [],
  gamesToFirstLetter: [],
  searchValue: "",
  searchResult: [],
  stateGames: [],
  genreGames: [],
  duplicateElements: [],
  setAllGames: (d) => {},
  setFilteredGames: (d) => {},
  setFirstLetters: () => {},
  setEnteredValue: (v) => {},
  getGamesToEnteredValue: (v) => {},
  setStateGames: (d) => {},
  setGenreGames: (d) => {},
  setDuplicateElements: (d) => {},
  fetchError: () => {},
});

export default GamesContext;
