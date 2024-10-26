import { useState } from "react";
import './sign.css'
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (validateEmail(email)) {
        setError('');
        navigate('/registration'); 
      } else {
        setError('Please enter a valid email.');
      }
    };
    return (
      <div>
          <form onSubmit={handleSubmit} className='input'>
          <p>Ready to watch? Enter your email to create or restart your membership.</p>
              <div className={`form-group ${error ? '' : ''}`}>
            <input type="email"
             placeholder="Email Address"
              className= {`email-input ${error ? 'is-invalid' : ''}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
              <button className='btnn'>Get Started</button>
              {error && <div className="invalid-feedback">{error}</div>}
              </div>
            </form>
        </div>
    );
  };
  export default Hero;
   