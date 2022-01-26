import React from "react";
import "./SearchForm.css";
import searchIcon from "../../images/search.svg";
import searchIconWhite from "../../images/search-white.svg";
import FilterSwitchButton from "../FilterSwitchButton/FilterSwitchButton";

const SearchForm = ({ isFilterButton, onToggleSwitch }) => {
  return (
    <div className="search">
      <form className="search-form">
        <div
          className="search-form__icon"
          style={{ backgroundImage: `url(${searchIcon})` }}
        ></div>
        <input
          className="search-form__input"
          type="text"
          placeholder="Фильм"
          required
        />
        <button
          className="search-form__button"
          style={{ backgroundImage: `url(${searchIconWhite})` }}
        ></button>
        <hr className="search-form__line" />
      </form>
      <FilterSwitchButton
        isFilterButton={isFilterButton}
        onToggleSwitch={onToggleSwitch}
      ></FilterSwitchButton>
    </div>
  );
};

export default SearchForm;
