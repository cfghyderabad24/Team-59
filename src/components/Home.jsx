import React from 'react';
import './Sidebar.css';
import Header from './Header';
import './Home.css';
import Sidebar from './Sidebar';
import ScrollingBanner from './Scrolling';
import DonationQRCode from './Qr-Code';


export default function Home() {
  return (
    <div className='my-class'>
      <Sidebar />
      <div className="main-content">
        <div className="header-container">
          <Header />
          <ScrollingBanner/>
          <DonationQRCode/>
        </div>
        <div className="content">
         
        </div>
      </div>
    </div>
  );
}
