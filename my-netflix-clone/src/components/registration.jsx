import React from 'react';
import './registration.css';
import Footer2 from './footer2';

const Registration = () => {
  return (
     <div>
 <div className='registration'>
 <div className="reg__nav">
      <img
        className="reg__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
      <a href="#" className='reg__signIn'>Sign In</a>
    </div>
    <img src="./images/Devices.png" alt="image" className='img' />
    <div className="body">
    <p className='p-1'>STEP 1 OF 3</p>
    <h2>Finish setting up your account</h2>
    <p>Create a password or request a sign-up link to use Netflix without a password on any device at any time.</p>
    <label className="checkbox-label">
    <input type="checkbox" className="checkbox" />
   <a href="#">Please do not email me Netflix special offers.</a>
   </label>
   <button className='btnn'>Create Password</button>
   <button className='btnn2'>Go Passwordless</button>
    </div>
    </div>
    <Footer2/>
     </div>
       
  );
};

export default Registration;
