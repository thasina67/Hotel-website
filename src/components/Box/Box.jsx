import React from 'react'
import "./Box.css";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
function Box() {
  return (
    <div className='container2'>
        <div className="content2">
<CalendarMonthIcon className='icon'/>
<input type="text" placeholder='10 Nov 2023   1 night    11 Nov 2023'/>
        </div>
        <div className="content2">
        < PersonOutlineOutlinedIcon className='icon'/>
<input type="text" placeholder='1 Room,1 Adult, 0 children'/>
        </div>
        <div className="content2">
        <SellOutlinedIcon className='icon'/>
<input type="text" placeholder='Special code'/>
        </div>
        <div className="search-btn">
            <button>Search</button>
        </div>
    </div>
  )
}

export default Box