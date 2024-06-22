// src/components/Footer.js
import React from 'react';
import './Footer.css';
import './root.css';

const Footer = () => {
    return (
      <div className='fixed-bottom'>
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section about">
                    {/* <h5>About Us</h5>
                    <p>We are dedicated to improving lives around the world through various initiatives and projects.</p> */}
                </div>
                <div className="footer-section-links">
                      <h5>Quick Links</h5>
                        <a href="/">Home</a>
                        <a href="/about">About Us</a>
                        <a href="/schemess">Schemas</a>
                        <a href="/contact">Contact</a>

                </div>
                <div className="footer-section contact">
                    {/* <h5>Contact Us</h5>
                    <p>Email: director@subhiksha.org</p>
                    <p>Phone: +91-9908076899,+919121104609</p>
                    <p>Address: Subhiksha Voluntary Organization
Plot No : 112 ,Road No :3 ,Dhanalaxmi Colony ,Mahendra Hills ,East Marredpally ,Secunderabad -500026 ,
Hyderabad ,Telangana ,India</p> */}
                </div>
                <div className="footer-section-social">
                    <h5>Follow Us</h5>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                   <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Our NGO. All rights reserved.</p>
            </div>
        </footer>
        </div>
    );
};

export default Footer;
