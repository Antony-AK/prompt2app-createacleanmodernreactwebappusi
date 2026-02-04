import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className='bg-gradient-to-br from-slate-900 via-gray-900 to-black min-h-screen text-white'>
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  )
}