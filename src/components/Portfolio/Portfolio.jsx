import React from "react";
import "./Portfolio.css";
import arrow from "../../images/arrow.svg";

const Portfolio = () => {
  const portfolioLinks = [
    {
      name: "Статичный сайт",
      path: "https://github.com/yana-yanchenko/how-to-learn",
      id: "1",
    },
    {
      name: "Адаптивный сайт",
      path: "https://yana-yanchenko.github.io/russian-travel/",
      id: "2",
    },
    {
      name: "Одностраничное приложение",
      path: "https://mesto-yana.nomoredomains.rocks/",
      id: "3",
    },
  ];
  return (
    <section className="portfolio">
      <h5 className="portfolio__title">Портфолио</h5>
      {portfolioLinks.map((item) => (
        <a href={item.path} className="portfolio__link" key={item.id}>
          {item.name}{" "}
          <span
            className="portfolio__arrow"
            style={{ backgroundImage: `url(${arrow})` }}
          />
        </a>
      ))}
    </section>
  );
};

export default Portfolio;
