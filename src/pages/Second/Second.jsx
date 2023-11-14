import React from 'react'
import "./Second.css"
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import Ourcard from '../../components/Ourcard/Ourcard';
function Second() {
    return (
        <div className='containernew'>
            <div className="titlenew">Our Destinations</div>
            <select  className='optionsnew'>
                <optgroup >
                    <option value="volvo">Cinnamon Dhonveli maldives</option>
                    <option value="saab">option</option>
                    <option value="saab">option</option>
                    <option value="saab">option</option>
                    <option value="saab">option</option>
                    <option value="saab">option</option>
                    <option value="saab">option</option>
                    <option value="saab">option</option>
                    <option value="saab">option</option>
                </optgroup>
            </select>
            <div className="bootomnew">
                <div className="imagenew"></div>
                <div className="contentnew"><Ourcard /></div>
            </div>

        </div>
    )
}

export default Second