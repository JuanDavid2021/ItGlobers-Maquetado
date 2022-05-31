import React from 'react';
import { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowRightLong} from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'


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

  const handleClick=(e)=>{
    e.preventDefault()
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }))
    if(input.email==="" || Object.entries(errors).length > 0){
      Swal.fire({
        title: 'Error',
        text: 'debes completar el formulario',
        icon: 'error',
        timer: 1000,
      })
      return 
    }
    else if(Object.entries(errors).length === 0){
      Swal.fire({
        text: 'Te has inscrito al newsletter correctamente',
        icon: 'success',
        timer: 2000,
        showConfirmButton: false
      })
      setInput({
       email:"",
      })  
    }
  }

  return (
        <form>
            <div>
                <input type="text" name="email" onChange={handleInputChange} placeholder="ingresa tu email" value={input.email} />
                <FontAwesomeIcon icon={faArrowRightLong} style={{position:"relative", left:"-30px", cursor:"pointer"}} onClick={handleClick}/>
            </div>
            <div>    
                {errors.email && (
                  <p style={{color:"red"}}>{errors.email}</p>
                )}
             </div>
        </form>
  )
}