import React, { useState, useEffect } from "react";
import "./SearchForm.css";
import searchIcon from "../../images/search.svg";
import searchIconWhite from "../../images/search-white.svg";
import FilterSwitchButton from "../FilterSwitchButton/FilterSwitchButton";
import { useForm } from "../../hooks/useForm";

const SearchForm = ({ isFilterButton, onToggleSwitch, onSubmit, keyword, setKeyword, isLocationSaved }) => {
  const { values, handleChange, errors, isValid } = useForm();
  const [lastValue, setlastValue] = useState(keyword);

  useEffect(() => {
    if (values.search === '') {
      if (isLocationSaved) {
        localStorage.removeItem('lastSearchMoviesSavedKeyword')
      } else {
        localStorage.removeItem('lastSearchMoviesKeyword')
      }
      setlastValue('')
    }
  }, [isLocationSaved, setKeyword, values.search]);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.search === '') {
      setKeyword('')
    }
    if (isValid) {
      onSubmit(values.search);
    }
    return
  };

  return (
    <div className="search">
      <form className="search-form" onSubmit={handleSubmit} noValidate>
        <div
          className="search-form__icon"
          style={{ backgroundImage: `url(${searchIcon})` }}
        ></div>
        <div className="search-form__data">
          <input
            className="search-form__input"
            type="text"
            placeholder={"Фильм"}
            autoComplete="off"
            name="search"
            minLength={1}
            value={values.search || lastValue || ''}
            onChange={handleChange}
          />
          <span className={`search-form__error ${errors?.search && 'search-form__error_type_visible'}`}>{errors.search}</span>
        </div>


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
