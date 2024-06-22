import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import './root.css';

const DonationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [razorpayLoaded, setRazorpayLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => setRazorpayLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the donation here (e.g., send data to an API)
    console.log('Form submitted:', formData);
    alert('Thank you for your donation!');
    // Reset form
    setFormData({
      name: '',
      email: '',
      amount: '',
      message: '',
    });

    handlePayment();
  };

  const handlePayment = () => {
    if (razorpayLoaded) {
      const options = {
        key: "",
        amount: formData.amount * 100, 
        currency: "INR",
        name: "NGO",
        description: "Donation for a cause",
        image: "https://example.com/your_logo.png",
        handler: function (response) {
          alert(`Payment successful. Payment ID: ${response.razorpay_payment_id}`);
          // You can handle further processing here
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: "7412589631"
        },
        notes: {
          address: "Razorpay Corporate office"
        },
        theme: {
          color: "#8e3969"
        }
      };

      const pay = new window.Razorpay(options);
      pay.open();
    } else {
      console.error('Razorpay script is not loaded yet.');
    }
  };

  return (
    <div>
    <div className='root'>
      <Sidebar />
      <Header />
      </div>
      <form onSubmit={handleSubmit} style={formStyle}>
        <h2>Donation Form</h2>
        <div style={fieldStyle}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>
        <div style={fieldStyle}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>
        <div style={fieldStyle}>
          <label>Amount:</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>
        <div style={fieldStyle}>
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <button type="submit" style={buttonStyle}>Donate</button>
      </form>
    </div>
  );
};

const formStyle = {
  maxWidth: '400px',
  margin: '5em auto',
  padding: '1em',
  borderRadius: '5px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#f9f9f9',
};

const fieldStyle = {
  marginBottom: '1em',
};

const inputStyle = {
  width: '100%',
  padding: '0.5em',
  boxSizing: 'border-box',
};

const buttonStyle = {
  padding: '0.7em 1.5em',
  backgroundColor: '#007BFF',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default DonationForm;
