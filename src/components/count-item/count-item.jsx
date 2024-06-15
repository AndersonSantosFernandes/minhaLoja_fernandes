
import { useEffect, useState } from 'react'
import './count-item.scss'

 

export function CountItem({stock}) {

    stock=10
    const [count, setCount] = useState(0) //Inicializa a variável com 0
    const styleCount = ""
    const increment = () => setCount(count + 1) // função anonoma na arowFunction
    const decrement = () => setCount(count - 1) // função anonoma na arowFunction

    if(count == 0){
    
         console.log(count)
    }
  
    return (

        <>


            <div className="add">
                <button  onClick={decrement}disabled={count === 0}>-</button>
                <p>{count}</p>
                <button onClick={increment} disabled={count === stock} >+</button>
            </div>

        </>

    )
}