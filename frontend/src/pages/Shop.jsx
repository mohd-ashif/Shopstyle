import React from 'react'
import Hero from '../components/hero/Hero'
import Popular from '../components/popular/Popular'
import NewCollections from '../components/NewCollections/NewCollections'
import NewsLetter from '../components/NewsLetter/NewsLetter'
import Footer from '../components/Footer/Footer'

const shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <NewCollections />
      < NewsLetter />
      <Footer />
    </div>
  )
}

export default shop