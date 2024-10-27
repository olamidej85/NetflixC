import {useState} from 'react';
import './Hero.css';
import { useNavigate } from 'react-router-dom';
import Movies from './movies'
import FAQ from './faq'
import Footer from './footer'
import Login from './login'

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
  const handleSignInClick = () => {
    navigate('/signIn'); 
  };
  return (
    <div>
      <div className='hero'>
      <div className="hero__overlay" />
      <div className="hero__content">
      <div className="navbar">
      <img
        className="navbar__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
      <button className="navbar__signIn"  onClick={handleSignInClick}>Sign In</button>
    </div>
        <h1>Unlimited movies, TV shows, and more.</h1>
        <p>Starts at ₦2,200. Cancel anytime.</p>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        <form onSubmit={handleSubmit} className='hero__input'>
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
      </div>
      <Movies/>
    <FAQ/>
    <Login/>
    <Footer /> 
    </div>
  );
};
export default Hero;
 