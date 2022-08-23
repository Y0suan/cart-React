import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import './button.css'

function Button() {
  return (  
        <a href="#" className='button'>
        <h3>To Cart</h3>
        <FontAwesomeIcon icon={faBagShopping}/>
        </a>

  )
}

export default Button