import { useContext } from "react";
import GamesContext from "../../store/games-context";
import "./SelectSorting.scss";

const SelectSorting = () => {
  const ctx = useContext(GamesContext);

  const changeHandler = (e) => {
    const value = e.target.value;
    ctx.setSelectedSortingValue(value);
  };
  return (
    <form className="sorting-form">
      <select name="sortingGames" id="sorting" onChange={changeHandler}>
        <option value="AZ">A - Z</option>
        <option value="ZA">Z - A</option>
      </select>
    </form>
  );
};

export default SelectSorting;
