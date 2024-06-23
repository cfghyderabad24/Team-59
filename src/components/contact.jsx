// ContactUs.js

import React, { useState } from 'react';
import './Contact-US.css'; // Import CSS file for styling
import Header from './Header';
import './Home.css';
import Sidebar from './Sidebar';

const ContactUs = () => {
  // State variables to store form data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your logic here to handle form submission (e.g., send data to backend)
    console.log({ name, email, message });
    // Reset form fields after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
    <div className='root'>
      <Sidebar />
      <Header />
      </div>
    <div className="contact-us">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default ContactUs;
