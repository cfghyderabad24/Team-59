import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import './root.css';
import './Events.css'
import img1 from './images/event1.jpg'; 
import img2 from './images/event2.jpg';
import img3 from './images/event3.jpg';
import img4 from './images/event4.jpg';

function Events() {
  return (
      <div >
      <div className='root'>
      <Sidebar />
      <Header />
      </div>
      <div className='image-gallery'>
      <img src={img1} alt="Logo"/>
      <img src={img2} alt="Logo"/>
      <img src={img3} alt="Logo"/>
      <img src={img4} alt="Logo"/>
      <img src={img2} alt="Logo"/>
      {/* <img src={img3} alt="Logo"/>
      <img src={img1} alt="Logo"/>
      <img src={img4} alt="Logo"/> */}
      </div>

    </div>
  )
}

export default Events
