import React from 'react'
import { NavBar } from '../../components/navBar/navBar'
import { Footer } from '../../components/footer/footer'
import PanoramicSlider from '../../components/gallery/gallery'

export const Gallery = () => {
  return (
    <div>
        <NavBar />
        <PanoramicSlider />
        <Footer />
    </div>
  )
}
