import React from 'react';
import './FilterSwitchButton.css'

const FilterSwitchButton = ({isFilterButton, onToggleSwitch}) => {
  return (
    <div className="filter">
      <div className={`switch ${isFilterButton && 'switch_type_disable'}`} onClick={onToggleSwitch}>
    <input
      type="checkbox"
      className="switch__checkbox"
      name="switch"
    />
    <span className={`switch__circle ${isFilterButton ? 'switch__circle_type_active' : 'switch__circle_type_disable'}`} />
  </div>
    <p className="filer__title">Короткометражки</p>
    </div>
    
  );
}

export default FilterSwitchButton;
