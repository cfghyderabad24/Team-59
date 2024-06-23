import React from 'react';
import QRCode from 'qrcode.react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const DonationQRCode = () => {
  // Replace this with your actual donation URL
  const donationUrl = './Donationform'; 

  return (
    <div>
      <h2>Donate Now!</h2>
      <QRCode value={donationUrl} />
      <p>Scan the QR code to donate.</p>
      <Link to={donationUrl}>Click here to donate</Link>
    </div>
  );
};

export default DonationQRCode;
