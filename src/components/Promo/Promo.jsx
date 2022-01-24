import React from 'react';
import './Promo.css'
import promo from '../../images/promo.svg'

const Promo = () => {
  return (
    <section className="promo" style={{backgroundImage: `url(${promo})`}}>
      <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
    </section>
  );
}

export default Promo;
