import React from 'react'
import NavBar from './NavBar'
import Carrito from './Carrito'
import './Menu.css'


const Header = () => {
  return (
    <div className='heaader'>
      <h1>Club Nix</h1>
      <NavBar/>
      <Carrito/>
    </div>
  )
}

export default Header
