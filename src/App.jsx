// import { useState } from 'react'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import { ItemListContainer } from './components/itemsList/itemList'
import { Navigation } from './components/navigation/navigation'
import { PokeApi } from './components/pokeApi/poke-api'
import { Home } from './components/home/home'
import { Inicial } from './components/inicial/inicial'
import { useEffect, useState } from 'react'
import { getFirestore, doc,getDoc, getDocs, collection, query, where, and } from "firebase/firestore"
import { Admin } from './adm/admin'
export function App() {


//  criar um estado para aparecer o id
  const [produtos, setProdutos] = useState()
  const [nomes, setNomes] = useState()

  //=======================buscar um produto por id especifico
// useEffect(() =>{

// // getFirestore busca o banco de dados no firestore e atribui a bariavel db (importar o getFirestore) 
//     const db = getFirestore()

    

//     // para buscar um item, usamos "doc" que é uma função do firebase que recebe tres parametros
//     //*db que é o banco de dados, items que é o nome da coleçaõ e a terceira é a id do documento(importar p doc)
//     const itensRef = doc(db,"items","jq8iBn2DD82Ex6fp5The")

//     //para buscar o item de fato usamos 'getDoc()' passando itensRef como parametro

//     getDoc(itensRef).then((snapshot) => {
//       if(snapshot.exists){
// console.log("documento: ", snapshot.data())
// setProdutos({id: snapshot.id, ...snapshot.data()})
//       }
//     })

//     // console.log(itensRef)
// },[])
// // console.log(produtos)
//=======================buscar um produto por id especifico

const precoInicial = 160
const precoFinal = 200

useEffect(()=>{

const fetchData = async () =>{

try {

  const db = getFirestore()
const storage = getStorage()



  const itemsCollection = collection(db, "items")
  const q = query(itemsCollection,
    where('price', ">", precoInicial, ),
    where('price', '<', precoFinal) 
    
  )

  const snapshot = await getDocs(q)
  let encontrados = []

  snapshot.forEach((doc) => {
    encontrados.push({id: doc.id,...doc.data()})
  });

  setProdutos(encontrados)
} catch (e) {
  console.error(e)
}

try {

  const db = getFirestore()
  const itemsCollection = collection(db, "usuarios")
  const q = query(itemsCollection)

  const snapshot = await getDocs(q)
  let encontrados = []

  snapshot.forEach((doc) => {
    encontrados.push({id: doc.id,...doc.data()})
  });

  setProdutos(encontrados)
} catch (e) {
  console.error(e)
}


}
fetchData()
},[])


console.log(produtos)
console.log(nomes)

  return (

    <>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route path='home/' element={<Home />} />          
          <Route path='poke-api/' element={<PokeApi />} />
          <Route path='itemList/' element={<ItemListContainer />} />
          <Route path='inicial/' element={<Inicial />} />
          <Route path='adm/' element={<Admin />} />
        </Route>
      </Routes>

    </>
  )
}


