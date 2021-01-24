import React from 'react'
import "./nav.css"
import NavOption from './NavOption'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ReorderIcon from '@material-ui/icons/Reorder';
import SearchIcon from '@material-ui/icons/Search';
function Nav() {
    return (
        <div className="nav">
            <div className="left-nav">
            <div className="logo">
                <img src="https://www.taxmann.com/assets/img/main-logo.png" alt="logo" width="200px"/>
            </div>
            <form className="form"> 
                <SearchIcon className="icon"/>
                <input type='text' placeholder="Search anything on tax and corporate law in bookstore"/>
            </form>
            </div>
            <div className="right-nav">
                <button type="btn" className="btn">Bookstore</button>
                <NavOption Icon={CloudDownloadIcon}/>
                <NavOption Icon={NotificationsNoneIcon}/>
                <NavOption Icon={AccountCircleIcon}/>
                <NavOption Icon={ShoppingCartIcon}/>
                <ReorderIcon className="reorder"/>
            </div>
            
        </div>
    )
}

export default Nav
