import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="navbar">
                        <div className="logo-section">
                        <div className="logo-icon">🌊</div>
                        <div className="logo-text">DriveWave</div>
                        </div>
                        <ul className="nav-links">
                        <li><a href="/" className="active">Home</a></li>
                        <li><a href="/add">Add Car</a></li>
                        <li><a href="/view">View Car</a></li>
                        <li><a href="#">Contact</a></li>
                        </ul>
                        <button className="btn-primary">Sign In</button>
                    </nav>
                </div>
            </div>
        </div>

    </div>
  )
}

export default NavBar