import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__overlay" />
      <div className="hero__content">
      <div className="navbar">
      <img
        className="navbar__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
      <button className="navbar__signIn">Sign In</button>
    </div>
        <h1>Unlimited movies, TV shows, and more.</h1>
        <p>Starts at ₦2,200. Cancel anytime.</p>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        <div className="hero__input">
          <input type="email" placeholder="Email address" />
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
