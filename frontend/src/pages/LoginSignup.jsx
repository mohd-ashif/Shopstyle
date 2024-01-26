import React, { useState } from 'react';
import Footer from '../components/Footer/Footer';

const LoginSignUp = () => {
  const [state, setState] = useState('Sign Up');
  const [ formData , setFormData]= useState({
    username:"",
    password:"",
    email:""
  })

  const changeHandler = (e)=> {
    e.preventDefault()
    setFormData({ ...formData,[e.target.name]:e.target.value})

  }

  const login = async () => {
   console.log("Login function executed", formData)

  };



  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-field">
  {state === 'Sign Up' ? <input type="text" name="username" value={formData.username} onChange={changeHandler} placeholder='Your name' /> : null}
  <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email address' />
  <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password' />
</div>

        <button onClick={() => (state === 'Login' ? login() : signUp())}>Continue</button>
        {state === 'Sign Up' ? (
          <p className='loginsignup-login'>
            already have an account ? <span onClick={() => setState("Login")}>Login here</span>
          </p>
        ) : (
          <p className='loginsignup-login'>
            Create an account <span onClick={() => setState("Sign Up")}>click here</span>
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
