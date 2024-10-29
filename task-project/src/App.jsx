import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import scrollicon from './components/scrollicon';
import MobilestockSection from './components/MobilestackSection';
const App = () => {
  return (
    <div>
      
      <Navbar />
      <Hero />
      <scrollicon />
      <MobilestockSection />
    </div>
  )
}

export default App
