import React from 'react';
import "./Navbar.css"
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
function Navbar() {
  return (
    <div className='container1'>
<div className="left1">
    <div className="item1">ABOUT<KeyboardArrowDownOutlinedIcon/>
    <div class="options1">
    <a href="#">ABOUT THE HOTEL</a>
    <a href="#">Overview</a>
    <a href="#">Explore Colombo</a> 
    <a href="#">Services & Facilities </a>
    <a href="#">Map & Directions</a>
  </div>
  </div>
  <div className="item1">ROOMS & SUITES<KeyboardArrowDownOutlinedIcon/>
  <div className="options-container">
  <div class="options1">
    <a href="#">Rooms</a>
    <a href="#">Deluxe Lake View </a>
    <a href="#">Deluxe Ocean View </a> 
    <a href="#">Premier Balcony</a>
    <a href="#">Premier Ocean View</a>
  </div>
  <div class="options1">
    <a href="#">Horizons Club</a>
    <a href="#">Horizons Club Lake view</a>
    <a href="#">Horizons Club Ocean View  </a> 
  </div>
  <div class="options1">
    <a href="#">Suites</a>
    <a href="#">Executive Suites</a>
    <a href="#">Specialty Suites </a> 
    <a href="#">Shangri-La Suite</a> 
  </div>
  <div class="options1">
    <a href="#">Connecting Rooms</a>
    <a href="#">Executive Suite & Premier Ocean Room Connecting</a>
    <a href="#">Two Deluxe Lake View Rooms Connecting</a> 
  </div>
  </div>
    
  </div>
  <div className="item1">DINING<KeyboardArrowDownOutlinedIcon/>
    <div class="options1">
    <a href="#">ABOUT THE HOTEL</a>
    <a href="#">Overview</a>
    <a href="#">Explore Colombo</a> 
    <a href="#">Services & Facilities </a>
    <a href="#">Map & Directions</a>
  </div>
  </div>
  <div className="item1">EXPERIENCE<KeyboardArrowDownOutlinedIcon/>
    <div class="options1">
    <a href="#">ABOUT THE HOTEL</a>
    <a href="#">Overview</a>
    <a href="#">Explore Colombo</a> 
    <a href="#">Services & Facilities </a>
    <a href="#">Map & Directions</a>
  </div>
  </div>
  <div className="item1">EVENTS<KeyboardArrowDownOutlinedIcon/>
    <div class="options1">
    <a href="#">ABOUT THE HOTEL</a>
    <a href="#">Overview</a>
    <a href="#">Explore Colombo</a> 
    <a href="#">Services & Facilities </a>
    <a href="#">Map & Directions</a>
  </div>
  </div>
  <div className="item1">GALLERY
    <div class="options1">
  </div>
  </div>
  <div className="item1">OFFERS
    <div class="options1">
  
  </div>
  </div>
  <div className="item1">MORE<KeyboardArrowDownOutlinedIcon/>
    <div class="options1">
    <a href="#">Apartments</a>
    <a href="#">Learn More</a>

  </div>
  </div>
</div>
<div className="right2">
    <button> FIND A HOTEL</button>
</div>
    </div>
  )
}

export default Navbar