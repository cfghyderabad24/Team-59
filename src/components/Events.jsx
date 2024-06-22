import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

function Events() {
  return (
      <div>
      <Sidebar />
      <div className="main-content">
        <div className="header-container">
          <Header />
        </div>
        <div className="content">

        </div>
      </div>
    </div>
  )
}

export default Events
