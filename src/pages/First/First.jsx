import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Slider from '../../components/Slider/Slider';
import Topbar from '../../components/Tobar/Topbar';

function First() {
  return (
    <div>
        <Topbar className="tobar"/>
      <Navbar className="navbar"/>
      <Slider className="slider"/>
    </div>
  )
}

export default First