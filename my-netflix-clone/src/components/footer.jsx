import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
       <a href="#" className='footer-contact'>Questions?Contact us.</a>
       <div className="footer-spacer"></div>
      <div className="footer-links">
        <div className="footer-column">
          <a href="#">FAQ</a>
          <a href="#">Investor Relations</a>
          <a href="#">Privacy</a>
          <a href="#">Speed Test</a>
        </div>
        <div className="footer-column">
          <a href="#">Help Center</a>
          <a href="#">Jobs</a>
          <a href="#">Cookie Preferences</a>
          <a href="#">Legal Notices</a>
        </div>
        <div className="footer-column">
          <a href="#">Account</a>
          <a href="#">Ways to Watch</a>
          <a href="#">Corporate Information</a>
          <a href="#">Only on Netflix</a>
        </div>
        <div className="footer-column">
          <a href="#">Media Center</a>
          <a href="#">Terms of Use</a>
          <a href="#">Contact Us</a>
        </div>
      </div>
      <button className="footer-language">
        <span role="img" aria-label="language">🌐</span> English
      </button>
      <p>Netflix Nigeria</p>
    </footer>
  );
};

export default Footer;
