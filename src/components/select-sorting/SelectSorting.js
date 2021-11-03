import "./SelectSorting.scss";

const SelectSorting = () => {
  return (
    <form className="sorting-form">
      <select name="sortingGames" id="sorting">
        <option value="AZ">A - Z</option>
        <option value="ZA">Z - A</option>
      </select>
    </form>
  );
};

export default SelectSorting;
