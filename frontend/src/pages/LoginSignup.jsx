import React from 'react'

const LoginSignUp = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign up</h1>
        <div className="loginsignup-field">
          <input type="text" placeholder='your name' />
          <input type="email" placeholder='email adress' />
          <input type="password" placeholder='password' />

        </div>
        <button>Continue</button>
        <p className='loginsignup-login'> already have an account ? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>by continuing , i agree to the terms of use & privacy policy </p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignUp