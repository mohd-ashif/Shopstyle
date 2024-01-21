import React from 'react'


const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offer On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>
        <input type="email" placeholder='Your Email ID' />
        <button>Subscribe</button>
      </div>
    </div>

  )
}

export default NewsLetter