import React from 'react'
import { NavBar } from '../../components/navBar/navBar'
import { Footer } from '../../components/footer/footer'
import { MenuPage } from '../../components/menu/menu'

export const Menu = () => {
  return (
   <div>
     <NavBar />
     <MenuPage />
     <Footer />
   </div>
  )
}
