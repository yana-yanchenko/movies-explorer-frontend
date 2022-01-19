import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./Techs.css";

const Techs = () => {
  const techs = ["HTML", "CSS", "JS", "React", "Git", "Express.js", "mongoDB"];
  return (
    <section className="techs" id="techs">
      <SectionTitle title="Технологии" h={3} />
      <h2 className="techs__title">7 технологий</h2>
      <p className="techs__subtitle">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className="techs__list">
        {techs.map((item) => (
          <li className="techs__list-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Techs;
