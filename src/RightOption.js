import React from 'react'
import "./RightOption.css"
function RightOption({url}) {
    return (
        <div className="right-option">
          <img src={url} className="right-image"/> 
          <div className="rightoption-content">
          <p className="super">Super deal of<br/> a lifetime</p> 
          <p style={{fontSize:"16px",color:"#4B4B4B"}}>Get 2 modules at a price<br/> of 1 module</p>
          <a href="#">Know More</a>
          </div>
        </div>
    )
}

export default RightOption
