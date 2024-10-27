import { useState } from 'react';
import './signIn.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';


const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      valid = false;
    } else {
      setEmailError('');
    }

    if (password.length < 6) {
      setPasswordError('Your password must contain between 4 to 60 characters.');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (valid) {
      console.log('Form Submitted Successfully');
    }
  };

  return (
  <>
    <div className="Body">
    <div className="net__nav">
      <img
        className="net__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
    </div>
      <div className="SignIn">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit} className="sign-input">
          <div className={`form-group ${emailError ? 'is-invalid' : ''}`}>
            <input
              type="email"
              placeholder="Email or mobile number"
              className="signemail-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <div className="invalid-feedback">{emailError}</div>}
          </div>

          <div className="password-container">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              className="password-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
                <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                className="eye-icon"
              />
            </span>
            {passwordError && <div className="error-message">{passwordError}</div>}
          </div>

          <button type="submit" className="submit-button">Sign In</button>
          <p>OR</p>
          <button type="submit" className="submit-button2">Use a Sign-In code</button>
        </form>
        <a href="#">Forgot Password?</a>
      </div>
    </div>
    <div className="Sign">
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
    </div>
    </>
  );
};

export default SignIn;
