import React from 'react'
import Footer from '../components/Footer'
import MultipleProducts from '../components/MultipleProducts'
import Navbar from '../components/Navbar'
import Products from '../components/Products'

function Home() {
  return (
    <div>
      <Navbar/>
      <MultipleProducts/>      
      <Footer/>
    </div>
  )
}

export default Home