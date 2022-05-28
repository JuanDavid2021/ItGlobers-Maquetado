import React from 'react'
import "./Navbar.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleDown} from '@fortawesome/free-solid-svg-icons'
import { Link, animateScroll as scroll } from "react-scroll";

export const Navbar = () => {
  return (
    <div className='navbar'>
       <img src="./assets/logos/puffi_white.png" className='logo'></img>
       <ul className='menuProducts'>
            <li>
                <img src="./assets/logos/pufi_puff.png" className='icon'/>    
                <Link to="pufi_puff" smooth="true" className="product" duration={1500}>PUFI PUFF</Link>  
            </li>

            <li>
                <img src="./assets/logos/pufi_rain.png" className='icon'/>     
                <Link to="pufi_rain" smooth="true" className="product" duration={1500}>PUFI RAIN</Link>  
                </li>
                <li>
                <img src="./assets/logos/pufi_cart.png" className='icon'/>     
                <Link to="pufi_cart" smooth="true" className="product" duration={1500}>PUFI CART</Link>  
                </li>
                <li>
                <img src="./assets/logos/pufi_nap.png" className='icon'/>     
                <Link to="pufi_nap" smooth="true" className="product" duration={1500}>PUFI NAP</Link>  
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
