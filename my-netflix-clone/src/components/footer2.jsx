import React from 'react';
import './Footer2.css';

const Footer = () => {
  return (
    <footer className="footer2">
       <a href="#" className='footer2-contact'>Questions?Contact us.</a>
       <div className="footer2-spacer"></div>
      <div className="footer2-links">
        <div className="footer2-column">
          <a href="#">FAQ</a>
          <a href="#">Cookie Preferences</a>
        </div>
        <div className="footer2-column">
          <a href="#">Help Center</a>
          <a href="#">Corporate Information</a>
        </div>
        <div className="footer2-column">
        <a href="#">Terms of Use</a>
        </div>
        <div className="footer2-column">
        <a href="#">Privacy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
