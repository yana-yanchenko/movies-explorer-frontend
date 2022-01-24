import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./AboutProject.css";

const AboutProject = () => {
  return (
    <section className="about" id="project">
      <SectionTitle title="О проекте" h={2} />
      <div className="about__info">
        <div className="about__item">
          <p className="about__title">Дипломный проект включал 5 этапов</p>
          <p className="about__subtitle">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about__item">
          <p className="about__title">На выполнение диплома ушло 5 недель</p>
          <p className="about__subtitle">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about__bar">
        <div className="about__bar-item">
          <span className="about__bar-title">1 неделя</span>
          <p className="about__bar-subtitle">Back-end</p>
        </div>
        <div className="about__bar-item about__bar-item_type_right">
          <span className="about__bar-title about__bar-title_theme_transparent">
            4 недели
          </span>
          <p className="about__bar-subtitle">Front-end</p>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
