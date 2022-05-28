import React from 'react';
import "./Products.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronRight} from '@fortawesome/free-solid-svg-icons'


export const Products = () => {
  return (
    <div className='products'>

    
    <div className='image1'>
      <div className='btn_umbrella'>
      <button>SHOP</button>
      </div>
    </div>

    <div className='pufi_rain' id="pufi_rain">
    
      <img src="./assets/products/pufi_umbrella.jpg"/>      
      <h3>PUFI RAIN</h3>
      <hr className='hr'></hr>
      <p>Descripcion del producto.Este es <br/>un texto simulado</p>
      <div className="triangulo_invertido"></div>
      <div className='more_img'>
      <FontAwesomeIcon icon={faChevronRight}/> 
      <p>VER MAS</p>
      </div>
    </div>

    <div className='pufi_rain' id="pufi_puff">
      <img src="./assets/products/pufi_purple.jpg" />
      <h3>Pufi PUFF</h3>
      <hr className='hr'></hr>
      <p>Descripcion del producto.Este es un texto simulado</p>
      <div className="triangulo"></div>
      <div className='more_img'>
      <FontAwesomeIcon icon={faChevronRight}/> 
      <p>VER MAS</p>
      </div>  
    </div>
    <img src="./assets/products/pufi_beach.jpg" className='image'/>
    
    <img src="./assets/products/pufi_car.jpg" className='image'/>
    <div className='pufi_rain' id="pufi_cart">
      <img src="./assets/products/pufi_bag.jpg"/>
      <h3>Pufi CART</h3>
      <hr className='hr'></hr>
      <p>Descripcion del producto.Este es un texto simulado</p>
      <div className="triangulo_invertido"></div>  
      <div className='more_img'>
      <FontAwesomeIcon icon={faChevronRight}/> 
      <p>VER MAS</p>
      </div>  
    </div>

    <div className='pufi_rain' id="pufi_nap">
      <img src="./assets/products/pufi_pillow.jpg"/>
      <h3>Pufi NAP</h3>
      <hr className='hr'></hr>
      <p>Descripcion del producto.Este es un texto simulado</p>
      <div className="triangulo"></div>  
      <div className='more_img'>
      <FontAwesomeIcon icon={faChevronRight}/> 
      <p>VER MAS</p>
      </div>  
    </div>
    <img src="./assets/products/pufi_nap.jpg" className='image'/>

    </div>
  )
}
