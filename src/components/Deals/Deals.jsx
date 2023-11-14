import React from 'react'
import './Deals.css'
import Dea from '../Dea/Dea';
import Api2 from "../../Api/Api2";

function Deals() {
  return (

    <div className='container11'>
        <div className='upper11'>
            offers
        </div>

        <div className='center11'>
        {Api2.map((element, index) => (
            <Dea Api2={element} key={index} />
            
          ))}
        </div>
        <button className='lower11'>
            viewall
        </button>
    </div>
  )
}

export default Deals