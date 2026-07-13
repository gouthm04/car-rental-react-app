import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo-section">
          <div className="logo-icon">🌊</div>
          <div className="logo-text">DriveWave</div>
        </div>
        <ul className="nav-links">
          <li><a href="#" className="active">Home</a></li>
          <li><a href="#">Add Car</a></li>
          <li><a href="#">View Car</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <button className="btn-primary">Sign In</button>
      </nav>

      <main 
        className="hero-main" 
        style={{ backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIlXYNPZBKyKg3t5HErGjM0mIBiVbj-_MOxYPjJG7RvA&s=10')` }}
      >
        <div className="hero-overlay"></div>
        <h1 className="hero-title" style={{ position: 'relative', zIndex: 10 }}>
          Experience the <br /> <span className="highlight">Ultimate</span> Drive
        </h1>
      </main>

      <div className="stats-pill-container">
        <div className="stats-pill glass-panel">
          <div className="stat-group">
            <div className="stat-value">500+</div>
            <div className="stat-label">Premium Cars</div>
          </div>
          <div className="divider"></div>
          <div className="stat-group">
            <div className="stat-value">2M+</div>
            <div className="stat-label">Happy Users</div>
          </div>
          <div className="divider"></div>
          <div className="stat-group">
            <div className="stat-value">50+</div>
            <div className="stat-label">Locations</div>
          </div>
          <div className="divider"></div>
          <button className="btn-primary cta-btn">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
