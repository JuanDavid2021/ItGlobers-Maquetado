import { createContext, useEffect, useState } from "react";
import axios from "axios";


export const InstagramContext = createContext()


const InstagramProvider =(props)=>{

    const [photos, setPhotos] =useState([])

    useEffect( ()=>{
  
        const peticion = async()=>{
            const response = await axios.get(`https://graph.instagram.com/me/media?fields=id,media_url,thumbnail_url,permalink&access_token=${process.env.REACT_APP_INSTAGRAM_TOKEN}`) 
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