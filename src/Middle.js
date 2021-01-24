import React from 'react'
import "./Middle.css"
import Book from "./Book"
import Carousel from './Carousel'
import Image3 from "./assets/image3.png"
import Book1 from "./assets/book1.png"
import Bitmap from "./assets/Bitmap.png"
import Vol2 from "./assets/vol2.png"
function Middle() {
    return (
        <div className="middle">
            <div className="middle-top">
                <Carousel url={Image3}/>
            </div>
            <div className="feeds">
            <div className="recommended">
              <p>Recommended for you </p>
              <a href="#">View all</a>
            </div>
            <div className="grid-container">
                <div className="grid-item">
                    <Book url={Bitmap} title="Income tax Rules with Master Guide" author="Aditya Gadge"/>
                </div>
                <div className="grid-item">
                    <Book url={Vol2} title="Income tax Rules with Master Guide" author="Aditya Gadge"/>
                </div>
                <div className="grid-item">
                    <Book url={Book1} title="Income tax Rules with Master Guide" author="Aditya Gadge"/>
                </div>
                <div className="grid-item">
                    <Book url={Book1} title="Income tax Rules with Master Guide" author="Aditya Gadge"/>
                </div>
                <div className="grid-item">
                    <Book url={Bitmap} title="Income tax Rules with Master Guide" author="Aditya Gadge"/>
                </div>
                <div className="grid-item">
                    <Book url={Vol2} title="Income tax Rules with Master Guide" author="Aditya Gadge"/>
                </div>
            </div>
            <div className="new-releases">
                <p>New Releases</p>
                <a href="#">View all</a>
            </div>
            <div className="grid-container">
                <div className="grid-item">
                    <Book url={Bitmap} title="Income tax Rules with Master Guide" author="Aditya Gadge"/>
                </div>
                <div className="grid-item">
                    <Book url={Vol2} title="Income tax Rules with Master Guide" author="Aditya Gadge"/>
                </div>
                <div className="grid-item">
                    <Book url={Book1} title="Income tax Rules with Master Guide" author="Aditya Gadge"/>
                </div>
                <div className="grid-item">
                    <Book url={Book1} title="Income tax Rules with Master Guide" author="Aditya Gadge"/>
                </div>
                <div className="grid-item">
                    <Book url={Bitmap} title="Income tax Rules with Master Guide" author="Aditya Gadge"/>
                </div>
                <div className="grid-item">
                    <Book url={Vol2} title="Income tax Rules with Master Guide" author="Aditya Gadge"/>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Middle
