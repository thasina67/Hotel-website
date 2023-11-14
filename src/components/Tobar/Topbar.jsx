import React from 'react'
import './Topbar.css'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined';
function Topbar() {
  return (
    <div className='container'>
        <div className="left">
           <div className="logo">
           </div>
        </div>
        <div className="right">
            
            <div className="item"><PersonOutlinedIcon/></div>
            <div className="item">Sign In</div>
            <div className="divder"></div>
            <div className="item">Join Now</div>
            <div className="divder"></div>
            <div className="item">Find Reservations</div>
            <div className="divder"></div>
            <div className="item">< LanguageOutlinedIcon className='world'/> English</div>
            <div className="divder"></div>
            <div className="item">LKR</div>
            <div className="divder"></div>
            <div className="item"> < SmartphoneOutlinedIcon/></div>
           
           

        </div>
    </div>
  )
}

export default Topbar