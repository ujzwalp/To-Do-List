import { forwardRef } from "react";

const SearchBar = forwardRef((props, ref) => {
  return (
    <div className="searchbar">
      <input
        ref={ref}
        type="text"
        placeholder="Search Task"
        className="search--task"
      />
      <button className="searchTaskButton" onClick={props.onSearch}>
        Search
      </button>
      <button className="cancel" onClick={props.onHomeButton}>
        Home
      </button>
    </div>
  );
});

export default SearchBar;
