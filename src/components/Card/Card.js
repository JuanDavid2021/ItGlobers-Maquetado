import React from 'react'
import "./Card.css"

export const Card = ({img}) => {
  
  return (
    <a className='card' href={img.permalink} target="_blank" >
      <img src={img.media_url}></img>
    </a>
  )
}
