import React from 'react'
import { NavBar } from '../../components/navBar/navBar'
import { HeroSection } from '../../components/heroSection/heroSection'
import { Footer } from '../../components/footer/footer'
import { Special } from '../../components/special/special'
import { Contact } from '../../components/contact/contact'

export const Home = () => {
  return (
    <div>
        <NavBar />
        <HeroSection />
        <Special />
        <Contact />
        <Footer />
        
    </div>
  )
}
