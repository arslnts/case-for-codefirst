import { useReducer } from "react";
import GamesContext from "./games-context";

const defaultGamesState = {
  games: [],
  loading: true,
  error: "",
  filteredGames: [],
  firstLetters: [],
  gamesToFirstLetter: [],
  searchValue: "",
  genreGames: [],
  stateGames: [],
  duplicateElements: [],
};

const gamesReducer = (state, action) => {
  if (action.type === "SETALLGAMES") {
    return {
      ...state,
      games: action.data,
      loading: false,
    };
  }

  if (action.type === "SETFILTEREDGAMES") {
    return {
      ...state,
      filteredGames: action.data,
    };
  }

  if (action.type === "SETFIRSTLETTERS") {
    const firstLetters = new Set();
    for (const g in state.games) {
      const game = state.games[g];
      const firstLetter = game.name.charAt(0).toLowerCase();
      firstLetters.add(firstLetter);
    }

    return {
      ...state,
      firstLetters: firstLetters,
    };
  }
  if (action.type === "SETSEARCHVALUE") {
    const searchValue = action.value;
    return {
      ...state,
      searchValue,
    };
  }
  if (action.type === "SETSTATEGAMES") {
    return {
      ...state,
      stateGames: action.data,
    };
  }

  if (action.type === "SETGENREGAMES") {
    return {
      ...state,
      genreGames: action.data,
    };
  }
  if (action.type === "SETDUPLICATEELEMENTS") {
    return {
      ...state,
      duplicateElements: action.data,
    };
  }

  if (action.type === "FETCHERROR") {
    return {
      ...state,
      loading: false,
      error: action.error,
    };
  }
};

const GamesProvider = ({ children }) => {
  const [gamesState, dispatchGamesAction] = useReducer(
    gamesReducer,
    defaultGamesState
  );

  const setAllGames = (data) => {
    dispatchGamesAction({ type: "SETALLGAMES", data: data });
  };
  const setFilteredGames = (data) => {
    dispatchGamesAction({ type: "SETFILTEREDGAMES", data: data });
  };

  const setFirstLetters = (data) => {
    dispatchGamesAction({ type: "SETFIRSTLETTERS", data: data });
  };
  const setEnteredValue = (value) => {
    dispatchGamesAction({ type: "SETSEARCHVALUE", value: value });
  };

  const setStateGames = (data) => {
    dispatchGamesAction({ type: "SETSTATEGAMES", data: data });
  };
  const setGenreGames = (data) => {
    dispatchGamesAction({ type: "SETGENREGAMES", data: data });
  };
  const setDuplicateElements = (data) => {
    dispatchGamesAction({ type: "SETDUPLICATEELEMENTS", data: data });
  };

  const fetchError = (error) => {
    dispatchGamesAction({ type: "FETCHERROR", error: error });
  };

  const gamesContext = {
    games: gamesState.games,
    loading: gamesState.loading,
    error: gamesState.error,
    filteredGames: gamesState.filteredGames,
    firstLetters: gamesState.firstLetters,
    gamesToFirstLetter: gamesState.gamesToFirstLetter,
    searchValue: gamesState.searchValue,
    stateGames: gamesState.stateGames,
    genreGames: gamesState.genreGames,
    duplicateElements: gamesState.duplicateElements,
    setAllGames,
    setFilteredGames,
    setFirstLetters,
    setEnteredValue,
    setStateGames,
    setGenreGames,
    setDuplicateElements,
    fetchError,
  };

  return (
    <GamesContext.Provider value={gamesContext}>
      {children}
    </GamesContext.Provider>
  );
};

export default GamesProvider;
