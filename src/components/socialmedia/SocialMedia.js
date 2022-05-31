import React, { useContext } from 'react'
import { Card } from '../Card/Card'

import { InstagramContext } from '../context/dataInstagram'
import Form  from './FormInput'
import "./SocialMedia.css"


export const SocialMedia = () => {

  const {photos} = useContext(InstagramContext)

  return (
    <div>
     <div className='title_social'>   
        <p>INSTAGRAM</p>
        <a href="https://www.instagram.com/tecnologiayprogramacion2022/" target="_blank">
        <h1>#ESPUFI</h1>
        </a>
     </div>
 
      <div className='instagram'>
          {
           photos.data?.slice(0,6).map(img=>(
             <Card img={img} key={img.id}/>  
           ))  
         }
      </div>
      

     <div className='title_social2'>
      <p>NEWSLETTER</p>
        <h1>SUSCRIBETE</h1>
        <p>Y enterate de todas las novedades</p>
    </div> 
    <div className='form'>
    <Form/> 
    </div>

    </div>
  )
}
