import React,{useState} from 'react'
import "./Carousel.css"
import ItemsCarousel from 'react-items-carousel';

function Carousel({url}) {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
    return (
            <div style={{ padding: `31 ${chevronWidth}px` }}>
            <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={1}
        gutter={20}
        leftChevron={<button className="chevron">{'<'}</button>}
        rightChevron={<button className="chevron">{'>'}</button>}
        insideChevron
        chevronWidth={chevronWidth}
         >
        <div className="carousel">
           <img src={url} className="carousel-images"/>
           <div className="subscription">
              <p className="sub">SUBSCRIPTION 2019</p>
              <p className="boost">Boost your Practice</p>
              <p style={{fontSize:"18"}}>An all encompassing,authentic and <br/> update platform</p>
              <button type="btn" className="know">KNOW MORE</button>
           </div>
        </div>
        <div className="carousel">
        <img src={url} className="carousel-images"/>
           <div className="subscription">
              <p className="sub">SUBSCRIPTION 2019</p>
              <p className="boost">Boost your Practice</p>
              <p style={{fontSize:"18"}}>An all encompassing,authentic and <br/> update platform</p>
              <button type="btn" className="know">KNOW MORE</button>
           </div>
        </div>
      </ItemsCarousel>
        </div>
    )
}

export default Carousel
