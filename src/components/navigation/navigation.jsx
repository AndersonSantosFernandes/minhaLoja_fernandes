  

import { Cart } from '../cart-icon/cart-icon'
import './navigation.scss'

  export function Navigation(){
    return(
        <>
        
        <div className="navbar">
            <div className="logo">
                <h2>Minha Logo</h2>
            </div>
            <div className="nav-links">
            <a className="nav-link" href="">Menu 01</a>
            <a className="nav-link" href="">Menu 02</a>
            <a className="nav-link" href="">Menu 03</a>
            </div>
            <div>
                <button className='login-btn'>Login</button>
            </div>
            <Cart/>
        </div>
        
        
        
        </>
    )
  }