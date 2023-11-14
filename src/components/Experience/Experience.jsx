import React from 'react'
import './Experience.css'
import Exp from '../Exp/Exp';

import Api from '../../Api/Api';

function Experiance() {
  return (
    <div>
        <div>
           <h2>Experience Something New</h2>
        </div>

        <div>
           <h4>Close to home or across world,hilton is there for you with memorable offers and experiences.Cheak out what's new</h4>
        </div>

        <div className='container14'>
        {Api.map((element, index) => (
            <Exp Api={element} key={index} />
            
          ))}
        </div>
    </div>
  )
}

export default Experiance