import React from 'react'
import "./Footer.css";
import {ReactComponent as FooterLogo} from "./assets/Footer-logo.svg"
import {ReactComponent as Facebook} from "./assets/Facebook.svg"
import {ReactComponent as Twitter} from "./assets/Twitter.svg"
import {ReactComponent as Linkedin} from "./assets/Linkedin.svg"
import {ReactComponent as Youtube} from "./assets/Youtube.svg"
import GooglePlay from "./assets/google-play.png"
import AppStore from "./assets/app-store.png"
function Footer() {
    return (
        <div className="footer">
            <div className="footer-grid">
                <div className="grid-item">
                 <FooterLogo/>
                 <p>Everything on you need on income tax,<br/>GST and corporate laws</p>
                 <div className="btn-grp">
                     <img src={GooglePlay}/>
                     <img src={AppStore} style={{marginLeft:"15px"}}/>
                 </div>
                 <div className="btn-grp">
                     <Facebook/>
                     <Twitter style={{marginLeft:"15px"}}/>
                     <Linkedin style={{marginLeft:"15px"}}/>
                     <Youtube style={{marginLeft:"15px"}}/>
                 </div>
                </div>
                <div className="grid-item">
                    <p>Products</p>
                    <p>Research</p>
                    <p>Practice</p>
                    <p>Exam</p>
                    <p>Complaince</p>
                    <p>Taxmann Bookstore</p>
                    <p>Taxmann Blog</p>
                </div>
                <div className="grid-item">
                    <p>Catalogue</p>
                    <p>Research</p>
                    <p>Practice</p>
                    <p>Exam</p>
                    <p>Complaince</p>
                    <p>Taxmann Bookstore</p>
                    <p>Taxmann Blog</p> 
                </div>
                <div className="grid-item">
                    <p>Authors</p>
                    <p>Research</p>
                    <p>Practice</p>
                    <p>Exam</p>
                    <p>Complaince</p>
                    <p>Taxmann Bookstore</p>
                    <p>Taxmann Blog</p>
                </div>
                <div className="grid-item">
                    <p>Business & Support</p>
                    <p>Research</p>
                    <p>Practice</p>
                    <p>Exam</p>
                    <p>Complaince</p>
                    <p>Taxmann Bookstore</p>
                    <p>Taxmann Blog</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
