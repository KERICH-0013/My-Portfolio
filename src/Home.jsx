import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import profileImg from './assets/profile.png';
import chainetImage from './assets/Chainet.png';

const Home = () => {
  const handleEmail = () => {
    const email = "labankipkoechkerich@gmail.com";
    window.location.href = `mailto:${email}`;
  };

  const handleWhatsApp = () => {
    const phoneNumber = "254710250577";
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="home-container">
      {/* Top‑right navigation with both buttons */}
      <div className="top-nav">
        <Link to="/education" className="nav-btn">
          🎓 Education Journey
        </Link>
        <Link to="/interests" className="nav-btn">
          ❤️ Passions & Interests
        </Link>
      </div>

      <div className="profile-image">
        <img src={profileImg} alt="Laban Kipkoech Kerich" className="avatar" />
      </div>

      <header className="hero">
        <h1 className="name">Laban Kipkoech Kerich</h1>
        <p className="tagline">
          Tech Enthusiast | Computer Technology 🎲 | System Developer
        </p>
        <p className="location">📍 Nairobi, Kenya</p>
        <div className="buttons">
          <button className="btn btn-email" onClick={handleEmail}>
            📧 Contact via Email
          </button>
          <button className="btn btn-whatsapp" onClick={handleWhatsApp}>
            💬 Contact Me on WhatsApp
          </button>
        </div>
      </header>

      <section className="summary">
        <h2>Professional Summary</h2>
        <p>
          Currently pursuing a Bachelor of Technology in Computer Technology at
          the Technical University of Kenya. My mission is focused on empowering
          communities through innovative system development and sustainable
          technology solutions.
        </p>
        <ul className="bullet-points">
          <li>💻 Tech Enthusiast</li>
          <li>🌍 Community Driven</li>
          <li>🚗 Car Enthusiast</li>
        </ul>
      </section>

      <section className="skills">
        <h2>Technical Skills</h2>
        <div className="skills-list">
          <span className="skill">Python</span>
          <span className="skill">Java</span>
          <span className="skill">Flutter</span>
          <span className="skill">HTML</span>
          <span className="skill">HTML/CSS</span>
          <span className="skill">DB Design</span>
          <span className="skill">Networking</span>
        </div>
      </section>

      <section className="projects">
        <h2>Featured Projects</h2>
        <div className="project-card">
          <div className="project-media">
            <img
              src={chainetImage}
              alt="CHAINET Tea+ App"
              className="project-image"
              style={{ width: '250px', height: '300px', objectFit: 'cover', borderRadius: '8px' }}
            />
          </div>
          <div className="project-content">
            <h3>CHAINET (Tea+ App)</h3>
            <p>
              Revolutionizing the agricultural supply chain for small‑scale tea farmers.
            </p>
            <a
              href="https://github.com/KERICH-0013/CHAINET13"
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View the CHAINET project
            </a>
          </div>
        </div>
        {/* Add more projects here by duplicating .project-card */}
      </section>
    </div>
  );
};

export default Home;