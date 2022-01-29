import React from 'react';
import './Popup.css'
import goodImage from '../../images/good.svg'
import errorImage from '../../images/error.svg'

const Popup = ({ isOpen, message, status, onToggle }) => {
  return (
    <div className={`popup ${isOpen && 'popup_type_active'}`} onClick={onToggle}>
      <img className='popup__image' src={status ? goodImage : errorImage} alt={status ? 'OK' : 'error'} />
      <p className='popup__title'>{message}</p>
    </div>
  )
}

export default Popup;