import React from 'react'
import "./Right.css"
import {ReactComponent as Truck} from "./assets/Orion_truck.svg"
import {ReactComponent as Secure} from "./assets/Orion_secure-payment.svg"
import {ReactComponent as Archive} from "./assets/Orion_archive-box.svg"
import Image2 from "./assets/image2.png"
import Image1 from "./assets/image1.png"
import RightOption from './RightOption'
function Right() {
    return (
        <div className="right">
            <div className="right-top">
                <div className="svg-box">
                <div className="right-top-content">
                <Truck/>
                <div className="svg-content">
                 <p style={{fontSize:"20px",color:"black"}}>Quick Delivery</p>
                 <p style={{fontSize:"15px",color:"#4B4B4B", marginTop:"-19px"}}>FedEx courier in most<br/> of the cities</p>
                </div>
                </div>
                <div className="right-top-content">
                <Archive/>
                <div className="svg-content">
                 <p style={{fontSize:"20px",color:"black"}}>Quick Delivery</p>
                 <p style={{fontSize:"15px",color:"#4B4B4B",marginTop:"-19px"}}>FedEx courier in most<br/> of the cities</p>
                </div>
                </div>
                <div className="right-top-content">
                <Secure/>
                <div className="svg-content">
                 <p style={{fontSize:"20px",color:"black"}}>Quick Delivery</p>
                 <p style={{fontSize:"15px",color:"#4B4B4B",marginTop:"-19px"}}>FedEx courier in most<br/> of the cities</p>
                </div>
                </div>
               </div> 
            </div>
            <div className="right-bottom">
                <p>Offers</p>
                <RightOption url={Image2}/>
                <RightOption url={Image1}/>
                <RightOption url={Image2}/>
                <RightOption url={Image1}/>
            </div>
        </div>
    )
}

export default Right
