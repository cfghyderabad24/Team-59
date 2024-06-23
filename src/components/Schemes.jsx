// src/components/SchemesAvailable.js
import React from 'react';
import './root.css';
import Header from './Header';
import './Home.css';
import Sidebar from './Sidebar';

const SchemesAvailable = () => {
  // Sample data for schemes
  const schemes = [
    {
      id: 1,
      name: 'Education Scheme',
      description: 'A scheme to provide education support for underprivileged children.',
       link: '/education-scheme'
    },
    {
      id: 2,
      name: 'Healthcare Scheme',
      description: 'A scheme to provide healthcare facilities in rural areas.',
     link: '/scheme about health policy'
    },
    {
      id: 3,
      name: 'Agriculture Scheme',
      description: 'A scheme to support farmers with the latest agricultural techniques.',
     link: '/agriculture-scheme'
    }
  ];

  return (
    <div >
     <div className='root'>
      <Sidebar />
      <Header />
      </div>
   
    <div style={styles.container}>
      <h1 style={styles.heading}>Available Schemes</h1>
      <ul style={styles.list}>
        {schemes.map(scheme => (
          <li key={scheme.id} style={styles.listItem}>
            <h2 style={styles.schemeName}>{scheme.name}</h2>
            <p style={styles.description}>{scheme.description}</p>
            {/* <a href={scheme.link} style={styles.link}>Learn More</a> */}
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  },
  heading: {
    fontSize: '2em',
    marginBottom: '20px'
  },
  list: {
    listStyleType: 'none',
    padding: 0
  },
  listItem: {
    marginBottom: '20px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px'
  },
  schemeName: {
    fontSize: '1.5em',
    margin: '0 0 10px 0'
  },
  description: {
    fontSize: '1em',
    margin: '0 0 10px 0'
  },
  link: {
    fontSize: '1em',
    color: '#007bff',
    textDecoration: 'none'
  }
};

export default SchemesAvailable;
