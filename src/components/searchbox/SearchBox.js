import "./SearchBox.scss";
import { FaSearch } from "react-icons/fa";
import { useContext } from "react";
import GamesContext from "../../store/games-context";

const SearchBox = () => {
  const GamesCtx = useContext(GamesContext);
  const changeHandler = (e) => {
    const value = e.target.value.trim();
    GamesCtx.setEnteredValue(value);
  };

  return (
    <div className="searchbox-container">
      <label htmlFor="searchbox">
        <FaSearch />
      </label>
      <input
        type="text"
        name="searchbox"
        placeholder="Search Games"
        onChange={changeHandler}
      />
    </div>
  );
};

export default SearchBox;
