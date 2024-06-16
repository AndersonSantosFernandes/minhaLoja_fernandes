
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { Cart } from '../cart-icon/cart-icon'
import { Logo } from '../logo/logo'
import './navigation.scss'

export function Navigation() {
  return (
    <>

      <div className="navbar">
        <NavLink className="nav-logo" to='/inicial'>
          <div className="logo">
            <Logo />
          </div>
        </NavLink>
        <div className="nav-links">

          <NavLink className="nav-link" to='/home'>Contador</NavLink>
          <NavLink className="nav-link" to='/itemList'>Item lista</NavLink>
          <NavLink className="nav-link" to='/poke-api'>Pokémons</NavLink>


        </div>

        <Cart />
      </div>


      <Outlet />
    </>
  )
}