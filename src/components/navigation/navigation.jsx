  

import { Cart } from '../cart-icon/cart-icon'
import { Logo } from '../logo/logo'
import './navigation.scss'

  export function Navigation(){
    return(
        <>
        
        <div className="navbar">
            <div className="logo">
                <Logo/>
            </div>
            <div className="nav-links">
            <a className="nav-link" href="">Menu 01</a>
            <a className="nav-link" href="">Menu 02</a>
            <a className="nav-link" href="">Menu 03</a>
            </div>
            
            <Cart/>
        </div>
        
        
        
        </>
    )
  }