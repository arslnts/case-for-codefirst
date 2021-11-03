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

const HomaPage = () => {
  const ctx = useContext(GamesContext);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [checkedGenres, setCheckedGenres] = useState([]);
  const [checkedStates, setCheckedStates] = useState([]);

  let content;
  useEffect(() => {
    console.log("useeffect run");
    setIsDataLoading(true);

    fetchData("games.json")
      .then((data) => {
        ctx.setAllGames(data);
        ctx.setFirstLetters(data);
      })
      .catch((error) => console.log(error));

    setIsDataLoading(false);
  }, [setIsDataLoading]);

  const getContent = (searchValue) => {
    content = searchValue.map((letter, i) => <Games key={i} letter={letter} />);
    return content;
  };

  if (!ctx.searchValue && ctx.filteredGames.length > 0) {
    let letters = new Set();
    ctx.filteredGames.map((g) => letters.add(g.name.charAt(0)));
    let newLetters = Array.from(letters);
    getContent(newLetters);
  } else if (
    ctx.searchValue &&
    ![...ctx.firstLetters].includes(ctx.searchValue.charAt(0))
  ) {
    content = "No Content";
  } else if (ctx.searchValue) {
    let searchValue = [ctx.searchValue];
    getContent(searchValue);
  } else {
    let searchValue = [...ctx.firstLetters];
    getContent(searchValue);
  }

  const getCheckedStates = (st) => {
    setCheckedStates([...checkedStates, st]);
  };
  const getCheckedGenres = (genre) => {
    setCheckedGenres([...checkedGenres, genre]);
  };
  console.log("Genre Games", ctx.genreGames);
  console.log("State Games", ctx.stateGames);
  console.log("filtered GAMES", ctx.filteredGames);
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
                {ctx.loading ? <Spinner /> : content}
                {ctx.error ? ctx.error : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomaPage;