import { createContext, useEffect, useState } from "react";
import axios from "axios";


export const InstagramContext = createContext()


const InstagramProvider =(props)=>{

    const [photos, setPhotos] =useState([])

    useEffect( ()=>{
  
        const peticion = async()=>{
            const response = await axios.get(`https://graph.instagram.com/me/media?fields=id,media_url,thumbnail_url,permalink&access_token=IGQVJXbHhBN0JUX3NkWnFYSlZAhbEF2Q2pFTlB4MjhDR0NoQzQ4anZAMZAlpqV0Y3ZA1NKdDROdlloUHp5N09pNzEtVDBsMnZAQOGxKUFRWTGplNnNLeXhoQ2VIYmEzN0JqYjNzdGo0M2x2NXJuRENUWDhJMgZDZD`) 
            setPhotos(response.data)
        } 
        peticion()
     },[])
    
    return(
  
     <InstagramContext.Provider
     value={{
      photos
     }}
     >
     {props.children}
     </InstagramContext.Provider>
    )
}

export default InstagramProvider;