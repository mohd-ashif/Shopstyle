import React, { useState } from 'react';
import Footer from '../components/Footer/Footer';
import axios from 'axios'

const LoginSignUp = () => {
  const [state, setState] = useState('login');
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  });

  const changeHandler = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async()=> {
    try {
      const response = await axios.post('http://localhost:4000/products/login', formData, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });

      const responseData = response.data;

      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace("/");
      } else {
        alert(responseData.error);
      }
    } catch (error) {
      console.error("Error during login:", error);
     
    }
    

  }

  const signup = async () => {
    
    try {
      const response = await axios.post('http://localhost:4000/products/signup', formData, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });

      const responseData = response.data;

      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace("/");
      } else {
        alert(responseData.error);
      }
    } catch (error) {
      console.error("Error during login:", error);
     
    }
  };


  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-field">
          {state === 'Signup' ? <input type="text" name="username" value={formData.username} onChange={changeHandler} placeholder='Your name' /> : null}
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email address' />
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password' />
        </div>

        <button onClick={() => (state === 'Login' ? login() : signup())}>Continue</button>
        {state === 'Signup' ? (
          <p className='loginsignup-login'>
            already have an account ? <span onClick={() => setState("Login")}>Login here</span>
          </p>
        ) : (
          <p className='loginsignup-login'>
            Create an account <span onClick={() => setState("Signup")}>click here</span>
          </p>
        )}
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>by continuing, I agree to the terms of use & privacy policy </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginSignUp;
