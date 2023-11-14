import React from 'react'
import './Exp.css'


function Exp(props) {
  return (
    <div className='conatinerin12'>
        <img src={props.Api.img} className='image12' alt="" />
        <h3 className='text12'>{props.Api.text}</h3>
    </div>
  )
}

export default Exp