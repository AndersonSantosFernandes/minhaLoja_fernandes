
import './cart-icon.scss'
import carrinho from '../../assets/shopping-cart-simple.svg'
import { CountItem } from '../count-item/count-item'

export function Cart(){

    return(
        <>
        <div className="cart-container">
            <img src={carrinho} className="shopping-icon"/>
           <CountItem/>
        </div>
        </>
        
    )


}