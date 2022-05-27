import React from 'react';
import { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowRightLong} from '@fortawesome/free-solid-svg-icons'


export function validate(input) {

  const errors = {};
  if (!input.email) {
    errors.email = 'email es requerido';
  } else if (!/\S+@\S+\.\S+/.test(input.email)) {
    errors.email = 'formato de email inválido';
  }
  return errors;
};

export default function  Form() {

  const [input, setInput] = useState({
    email: '',
  }) 
  const [errors, setErrors] = useState({});

  const handleInputChange=(e)=>{
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })

    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }));
  }

  return (
        <form>
            <div>
                <input type="text" name="email" onChange={handleInputChange} placeholder="ingresa tu email" value={input.email} />
                <FontAwesomeIcon icon={faArrowRightLong} style={{position:"relative", left:"-30px"}} />
            </div>
            <div>    
                {errors.email && (
                  <p style={{color:"red"}}>{errors.email}</p>
                )}
             </div>
        </form>
  )
}