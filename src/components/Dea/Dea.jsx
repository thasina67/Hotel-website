import React from 'react'
import './Dea.css'

function Dea(props) {
  return (
    
    <div className='container13'>
        <img className='image13' src={props.Api2.img} alt="" />

        <div>
          {props.Api2.text1}
        </div>

        <div>
          {props.Api2.text2}
        </div>

        <div className='heading13'>
          {props.Api2.text3}
        </div>

        <div>
          {props.Api2.text4}
        </div>

        <div className='price13'>
          {props.Api2.text5}
        </div>

        <button className='button13'>
            View Details
        </button>
    </div>
    
  )
}

export default Dea