import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/" style={{color:"#00b887"}} >VDownloader<span style={{color:"#4a4a4a"}} >.Net</span></a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Account</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Feedback</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">API Documentation</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
