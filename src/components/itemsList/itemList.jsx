
import { useState } from 'react'
import './itemList.scss'
import { FirebaseDb } from '../firebase/firebase'


export function ItemListContainer() {

    const [nomeProd, setnomeProd] = useState('')
    const [description, setDescription] = useState('')
    const [preco, setPreco] = useState('')
    const [imageUrl, setImageUrl] = useState('')



    

    return (
        <>
            <div className="item-list-container">
                <h1>
                    Aqui será exibido nosso catálogo de produtos
                </h1>

                <input type="text"
                    value={nomeProd}
                    onInput={(e) => setnomeProd(e.target.value)}
                    placeholder={'Nome Produto'}
                />

                <input type="text"
                    value={description}
                    onInput={(e) => setDescription(e.target.value)}
                    placeholder={'Descrição'}
                />
                <input type="number"
                    value={preco}
                    onInput={(e) => setPreco(e.target.value)}
                    placeholder={'Precço'}
                />
                <input type="text"
                    value={imageUrl}
                    onInput={(e) => setImageUrl(e.target.value)}
                    placeholder={'URL da imagem'}
                />

                <button  >Executar</button>
                <FirebaseDb />
            </div>


        </>
    )
}