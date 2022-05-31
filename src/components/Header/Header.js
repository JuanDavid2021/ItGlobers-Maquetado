import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import "./Header.css";

export const Header = () => {
  return (
    <div className='slider'>
        <Navbar/>

      <div className='title'>
        <h1>ESTAR CÓMODO,<br/>
            NUNCA FUE TAN FÁCIL.
        </h1>
      </div>

      <div className='btn'>
      <button>SHOP</button>
      </div>

    </div>
  )
}
