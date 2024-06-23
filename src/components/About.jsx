import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import './root.css';
import logo from './images/logo.jpg'; 
import "bootstrap/dist/css/bootstrap.min.css";


function About() {
  return (
    <div>
    <div className='root'>
    <Sidebar />
    <Header />
    </div>
      <div className="main-content">
        <div className="header-container">
          
        </div>
        <div className="content">
          <p>Subhiksha Voluntary Organization is a registered non government organization founded on 8th October 2009 by a group of trained and qualified professional Social workers to help and support differently abled children of all ages and disabilities including Autism, Mental Retardation, Cerebral Palsy, Hearing Impaired and multiple disabilities.
Subhiksha is presently running Special School (Day Care Centre) for children with Autism, Attention Deficit (Hyperactivity) Disorder, Down Syndrome, Mental Retardation, Hearing Impaired etc. Special Education is provided to the children who are mentally and developmentally challenged</p>
{/* <div class="card" style={"width: 100px;"}>
  <img src={logo} className="card-img-top" alt="NGO"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div> */}
        </div>
      </div>
    </div>
  )
}

export default About
