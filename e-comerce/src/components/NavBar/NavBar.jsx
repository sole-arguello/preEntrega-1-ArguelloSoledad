import React from 'react'
import '../NavBar/NavBar.scss'
import CarWidget from '../CarWidget/CarWidget'

function NavBar() {
  return (
    <nav className='navBar'>
        <h3 className='navbar__titulo'>Ecomerce AlaCachufleta</h3>
        <ul className='navbar__menu'>
            <li className='navbar__menu--li'>Conjuntos</li>
            <li className='navbar__menu--li'>Bombis</li>
            <li className='navbar__menu--li'>Top</li>
        </ul>

        <CarWidget />
    </nav>
  )
}

export default NavBar