import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <section className="about-me" id="info">
      <SectionTitle title="Студент" h={4} />
      <article className="about-me__info">
        <div className="about-me__list">
          <h3 className="about-me__title">Яна</h3>
          <p className="about-me__subtitle">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__description">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <div className="about-me__links">
            <a
              href="https://github.com/yana-yanchenko"
              className="about-me__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://github.com/yana-yanchenko"
              className="about-me__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
        </div>
        <a
          className="about-me__image"
          href="https://github.com/yana-yanchenko"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundImage: `url(${"https://avatars.githubusercontent.com/u/82964950?v=4"})`,
          }}
        />
      </article>
    </section>
  );
};

export default AboutMe;
