import { useContext, useEffect, useState } from "react";
import SearchBox from "../components/searchbox/SearchBox";
import Layout from "../components/layout/Layout";
import "./HomePage.scss";
import Checkbox from "../components/checkbox/Checkbox";
import SelectSorting from "../components/select-sorting/SelectSorting";
import Games from "../components/games/Games";
import GamesContext from "../store/games-context";
import fetchData from "../helper/fetchData";
import Spinner from "../components/spinner/Spinner";
import { sortingFunc, sortingLetters } from "../helper/sorting";

const HomaPage = () => {
  const ctx = useContext(GamesContext);
  let selectedSortingValue = ctx.selectedSortingValue;

  const filteredGames = sortingFunc(ctx.filteredGames);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [checkedGenres, setCheckedGenres] = useState([]);
  const [checkedStates, setCheckedStates] = useState([]);
  let content;

  useEffect(() => {
    setIsDataLoading(true);
    fetchData("games.json")
      .then((data) => {
        ctx.setAllGames(data);
        ctx.setFirstLetters(data);
      })
      .catch((error) => ctx.fetchError(error));

    setIsDataLoading(false);
  }, [ctx]);

  const getContent = (searchValue) => {
    content = searchValue.map((letter, i) => <Games key={i} letter={letter} />);
    return content;
  };

  if (!isDataLoading) {
    content = <p>ctx.error</p>;
  }

  if (!ctx.searchValue && filteredGames.length > 0) {
    let letters = new Set();
    filteredGames.map((g) => letters.add(g.name.charAt(0)));
    let newLetters = Array.from(letters);
    sortingLetters(newLetters, selectedSortingValue);
    getContent(newLetters);
  } else if (ctx.searchValue && filteredGames.length > 0) {
    let searchValue = ctx.searchValue;
    let letters = new Set();
    filteredGames.map((g) => letters.add(g.name.charAt(0)));
    let newLetters = Array.from(letters).map((v) => v.toLowerCase());
    sortingLetters(newLetters, selectedSortingValue);

    if (newLetters.includes(searchValue.toLowerCase())) {
      getContent([searchValue]);
    } else {
      searchValue = "";
      getContent([searchValue]);
    }
  } else if (ctx.searchValue && ctx.filteredGames.length === 0) {
    let searchValue = ctx.searchValue;

    let newGames = Object.values(ctx.games).filter((g) =>
      g.name.toLowerCase().startsWith(searchValue)
    );
    newGames = sortingFunc(newGames, selectedSortingValue);

    if (newGames.length > 0) {
      getContent([searchValue].sort());
    } else {
      searchValue = "";
      getContent([searchValue].sort());
    }
  } else {
    let searchValue = [...ctx.firstLetters];
    selectedSortingValue = selectedSortingValue ? selectedSortingValue : "AZ";
    sortingLetters(searchValue, selectedSortingValue);
    getContent(searchValue);
  }

  const getCheckedStates = (st) => {
    setCheckedStates([...checkedStates, st]);
  };
  const getCheckedGenres = (genre) => {
    setCheckedGenres([...checkedGenres, genre]);
  };

  return (
    <Layout>
      <div className="homepage-container">
        <div className="homepage-container__top">
          <h1>Lorem ipsum dolor sit amet consectetur</h1>
          <p>
            With the Cloud you can join play and share games online with anyone
            in the world. Play any game on any device!
          </p>
          <SearchBox />
        </div>
        <div className="homepage-container__bottom">
          <div>
            <div className="homepage-container__bottom-left">
              <p className="homepage-container__bottom-left-title">
                Browse Games
              </p>

              <div className="homepage-container__sidebar">
                <div className="homepage-container__sidebar-group">
                  <p>State</p>
                  <Checkbox
                    name="Available"
                    getCheckedName={getCheckedStates}
                  />
                  <Checkbox name="Patching" getCheckedName={getCheckedStates} />
                  <Checkbox
                    name="Maintenance"
                    getCheckedName={getCheckedStates}
                  />
                </div>

                <div className="homepage-container__sidebar-group">
                  <p>Genre Filters</p>
                  <Checkbox name="Action" getCheckedName={getCheckedGenres} />
                  <Checkbox
                    name="Adventure"
                    getCheckedName={getCheckedGenres}
                  />
                  <Checkbox name="Casual" getCheckedName={getCheckedGenres} />
                  <Checkbox name="Horror" getCheckedName={getCheckedGenres} />
                  <Checkbox name="MOBA/MMO" getCheckedName={getCheckedGenres} />
                  <Checkbox
                    name="Open World"
                    getCheckedName={getCheckedGenres}
                  />
                  <Checkbox
                    name="Platformer"
                    getCheckedName={getCheckedGenres}
                  />
                  <Checkbox name="RPG" getCheckedName={getCheckedGenres} />
                  <Checkbox name="Shooters" getCheckedName={getCheckedGenres} />
                  <Checkbox
                    name="Simulation"
                    getCheckedName={getCheckedGenres}
                  />
                  <Checkbox name="Sports" getCheckedName={getCheckedGenres} />
                  <Checkbox name="Strategy" getCheckedName={getCheckedGenres} />
                </div>
              </div>
            </div>
            <div className="homepage-container__bottom-right">
              <SelectSorting />
              <div className="homepage-container__games">
                {ctx.error ? ctx.error : ctx.loading ? <Spinner /> : content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomaPage;
