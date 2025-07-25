import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Our Platform</h1>
          <p>Experience modern solutions for your digital needs.</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      <section className="features">
        <h2>Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Fast</h3>
            <p>Optimized for speed and performance.</p>
          </div>
          <div className="feature-card">
            <h3>Responsive</h3>
            <p>Looks great on any device size.</p>
          </div>
          <div className="feature-card">
            <h3>Easy to Use</h3>
            <p>Clean, intuitive interface for everyone.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
