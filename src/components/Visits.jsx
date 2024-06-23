import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import './Header.css'
import './Visits.css'; // Import the CSS file
import './root.css';

const Visits = () => {
  const [formData, setFormData] = useState({
    organizationName: '',
    email: '',
    city: '',
    phoneNumber: '',
    visitDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div>
     <div className='root'>
      <Sidebar />
      <Header />
      </div>
      
    <div className="visits-container">
      <Sidebar />
      <div className="main-content">
        <div className="header-container">
        </div>
        <div className="content">
          <form className="form-container" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="organizationName">Name of Organisation:</label>
              <input
                type="text"
                id="organizationName"
                name="organizationName"
                value={formData.organizationName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">City:</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="visitDate">Date of Visit:</label>
              <input
                type="date"
                id="visitDate"
                name="visitDate"
                value={formData.visitDate}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" class="btn btn-secondary">Submit</button>
  
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Visits;
