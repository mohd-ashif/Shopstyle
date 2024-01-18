import React from 'react'
import Hero from '../components/hero/Hero'
import Popular from '../components/popular/Popular'
import NewCollections from '../components/NewCollections/NewCollections'
import NewsLetter from '../components/popular/NewsLetter/NewsLetter'

const shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <NewCollections />
     < NewsLetter/>
    </div>
  )
}

export default shop