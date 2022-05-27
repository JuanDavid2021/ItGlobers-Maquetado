import React from 'react';
import "./Footer.css"

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='logoFooter'>
            <img src="./assets/logos/puffi_footer.jpg"/>
        </div>

        <div>
            <p>PUFI RAIN</p>
            <p>PUFI PUFF</p>
            <p>PUFI CART</p>
            <p>PUFI NAP</p>
        </div>

        <div>
            <p>CONTACTO</p>
            <p>AYUDA</p>
            <p>CÓMO COMPRAR</p>
            <p>TERMINOS Y CONDICIONES</p>
        </div>

        <div>
            <p>COMPRA 100% SEGURA</p>
            <div className='compra'>
            <img src="./assets/logos/qr.jfif"/>
            <img src="./assets/logos/compra_segura.png"/>
            <p>COMPRA CON <br/> LA GARANTIA <br/> DE PUFI</p>
            </div>
        </div> 

        <div className='social'>
            <p>SEGUINOS EN</p>
            <a href="https://www.facebook.com/CinemarkColombia" target="_blank">
            <img src="./assets/logos/facebook.png"/>
            </a>
            <a href="https://www.instagram.com/cinemarkcol/" target="_blank">
            <img src="./assets/logos/instagram.png"/>
            </a>
            <a href="https://twitter.com/CinemarkCol?lang=es" target="_blank">
            <img src="./assets/logos/twitter.png"/>
            </a>
        </div>
    </div>
  )
}
