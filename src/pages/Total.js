import React from 'react';
import First from './First/First';
import Second from './Second/Second';
import Deals from '../components/Deals/Deals';
import Experiance from '../components/Experience/Experience';



function Total() {
  return (
    <div>
      <First/>
      <Second/>
      <Deals/>
      <Experiance/>
    </div>
  );
}

export default Total;
