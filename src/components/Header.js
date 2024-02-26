import React from "react";
import Search from "./Search";
import Sort from "./Sort";

function Header({ search, onSearchChange, onSortClick, sort }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearchChange={onSearchChange} search={search} />
      <Sort onSortClick={onSortClick} sort={sort}/>
    </header>
  );
}

export default Header;
