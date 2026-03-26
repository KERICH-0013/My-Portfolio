import React from 'react';
import './Interests.css';
import { Link } from 'react-router-dom';
import techImg from './assets/Tech.png';   // ensure the file exists
import teaImg from './assets/Tea.png';  
import chainetImg from './assets/Chainet.png'   // ensure the file exists

const Interests = () => {
  const interests = [
    {
      icon: "💻",
      title: "Technology & Innovation",
      description: "Exploring emerging tech, building solutions, and staying ahead of the curve.",
      image: techImg   // ✅ use the imported variable
    },
    {
      icon: "🌱",
      title: "Agritech & Tea Farming",
      description: "Passionate about using tech to improve small‑scale farming, especially in the tea sector.",
      image: teaImg    // ✅ use the imported variable
    },
    {
      icon: "⚽",
      title: "Football",
      description: "COYG❤️Football fanatic! A true football fan",
      image: "https://via/400x200?text=Football"
    },
    {
      icon: "📱",
      title: "Mobile App Development",
      description: "Creating intuitive mobile experiences with Flutter and React Native.",
      image: chainetImg
    },
    {
      icon: "🌍",
      title: "Community Impact",
      description: "Driving change through tech education and sustainable projects.",
      image: "https://via.placeholder.com/400x200?text=Community+Impact"
    },
    {
      icon: "🧠",
      title: "Continuous Learning",
      description: "Always learning new tools, languages, and methodologies.",
      image: "https://via.placeholder.com/400x200?text=Continuous+Learning"
    }
  ];

  return (
    <div className="interests-container">
      <div className="interests-header">
        <h1>Passions & Interests ❤️</h1>
        <p className="subtitle">A glimpse into what drives me</p>
        <Link to="/" className="back-button">← Back to Home</Link>
      </div>

      <div className="interests-grid">
        {interests.map((item, idx) => (
          <div key={idx} className="interest-card">
            <div className="interest-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="interest-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Interests;