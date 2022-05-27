import React from 'react'
import "./Navbar.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleDown} from '@fortawesome/free-solid-svg-icons'


export const Navbar = () => {
  return (
    <div className='navbar'>
       <img src="./assets/logos/puffi_white.png" className='logo'></img>
       <ul className='menuProducts'>
            <li>
                <img src="./assets/logos/pufi_puff.png" className='icon'/>    
                <a>PUFI PUFF</a>  
            </li>

            <li>
                <img src="./assets/logos/pufi_rain.png" className='icon'/>     
                <a>PUFI RAIN</a>  
                </li>
                <li>
                <img src="./assets/logos/pufi_cart.png" className='icon'/>     
                <a>PUFI CART</a>  
                </li>
                <li>
                <img src="./assets/logos/pufi_nap.png" className='icon'/>     
                <a>PUFI NAP</a>  
            </li>

        </ul> 
             <div className='user'>
              <p>MI CUENTA</p>
              <FontAwesomeIcon icon={faAngleDown} />
              <p>MI COMPRA</p>  
            </div>
    </div>
  )
}
