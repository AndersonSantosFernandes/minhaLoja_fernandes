
import { useState } from 'react'
import './itemList.scss'

export function ItemListContainer(){

const [input, setInput] = useState('')

    return(
        <>
      <div className="item-list-container">
      <h1>
            Aqui será exibido nosso catálogo de produtos
            </h1>
            <input type="text"
            value={input}
            onInput={(e) => setInput(e.target.value)}
            />

            <button  >Executar</button>
      </div>
       </>
    )
}