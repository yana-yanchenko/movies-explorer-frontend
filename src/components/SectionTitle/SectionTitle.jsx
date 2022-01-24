import React from 'react';
import './SectionTitle.css';

const SectionTitle = ({ title, h }) => {
  return (
    React.createElement(
      `h${h}`,
      { className: "title" },
      `${title}`
    )
  )
}

export default SectionTitle;