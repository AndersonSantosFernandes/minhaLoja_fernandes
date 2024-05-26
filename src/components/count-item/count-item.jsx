
import { useState } from 'react'
import './count-item.scss'

export function CountItem() {

    const [count, setCount] = useState(0) //Inicializa a variável com 0

    const increment = () => setCount(count + 1) // função anonoma na arowFunction
    const decrement = () => setCount(count - 1) // função anonoma na arowFunction
    return (

        <>
        
            <div className="add">
                <button onClick={increment}>+</button>
                <p>{count}</p>
                <button onClick={decrement}>-</button>
            </div>

        </>

    )
}