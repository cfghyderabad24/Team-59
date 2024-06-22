import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'


function About() {
  return (
    <div>
        <div>
      <Sidebar />
      <div className="main-content">
        <div className="header-container">
          <Header />
        </div>
        <div className="content">
          <p>Subhiksha Voluntary Organization is a registered non government organization founded on 8th October 2009 by a group of trained and qualified professional Social workers to help and support differently abled children of all ages and disabilities including Autism, Mental Retardation, Cerebral Palsy, Hearing Impaired and multiple disabilities.
Subhiksha is presently running Special School (Day Care Centre) for children with Autism, Attention Deficit (Hyperactivity) Disorder, Down Syndrome, Mental Retardation, Hearing Impaired etc. Special Education is provided to the children who are mentally and developmentally challenged</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About
