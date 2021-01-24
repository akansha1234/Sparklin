import React from 'react'
import "./Book.css";
import {ReactComponent as Star} from "./assets/Star.svg"
import {ReactComponent as StarNot} from "./assets/Star-not-marked.svg"
function Book({url,title,author}) {
    return (
        <div className="book">
            <div className="card">
              <img src={url}/>
            </div>
            <p className="book-title">{title}</p>
            <p className="book-author">{author}</p>
            <div className="price">
                <p>Rs.399</p>
               <div className="star-svg">
                   <Star/>
                   <Star/>
                   <Star/>
                   <Star/>
                   <StarNot/>
               </div>
            </div>
            <div className="price">
               <button type="btn" className="add">ADD TO CART</button>
               <button type="btn" className="buy">Buy Now</button>
            </div>
        </div>
    )
}

export default Book
