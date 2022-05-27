import React from 'react'
import Form  from './FormInput'
import "./SocialMedia.css"

export const SocialMedia = () => {
  return (
    <div>
     <div className='title_social'>   
        <p>INSTAGRAM</p>
        <a href="https://www.instagram.com/tiendasjumbocolombia/" target="_blank">
        <h1>#ESPUFI</h1>
        </a>
     </div>
 
     <div className='grid1'>
     <div className='container1'> 
        <div>
        <iframe width="200"  height="250" src="http://instagram.com/p/CeABdbqtSxP/embed" scrolling="yes" frameborder="0" style={{top:"95px"}}></iframe>
        </div> 

        <div >
        <iframe width="200"  height="250" src="http://instagram.com/p/CeCmSvtNTYa/embed" scrolling="yes" frameborder="0" style={{top:"95px"}}></iframe>
        </div> 

        <div >
        <iframe width="200"  height="250" src="http://instagram.com/p/CdzExWiu2qf/embed" scrolling="yes" frameborder="0" style={{top:"95px"}}></iframe>
        </div> 
      </div> 
    </div>  
 
    <div className='grid2'>
     <div className='container2'> 
        <div>
        <iframe width="200"  height="250" src="http://instagram.com/p/Cc37PSTpRWy/embed" scrolling="yes" frameborder="0" style={{top:"95px"}}></iframe>
        </div> 

        <div >
        <iframe width="200"  height="250" src="http://instagram.com/p/CcoeiRbpygz/embed" scrolling="yes" frameborder="0" style={{top:"95px"}}></iframe>
        </div> 

        <div >
        <iframe width="200"  height="250" src="http://instagram.com/p/CTM6RMXreDX/embed" scrolling="yes" frameborder="0" style={{top:"95px"}}></iframe>
        </div> 
      </div> 
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
