import React from 'react'
import { IoPersonAddSharp } from "react-icons/io5";
const Button = ({label}) => {
  return (
    <>
    <div className='container'>
    <button type="button" class="btn btn-primary"><IoPersonAddSharp />{label}</button>
 
    </div>
    </>
  )
}

export default Button