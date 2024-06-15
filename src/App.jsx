// import { useState } from 'react'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import { ItemListContainer } from './components/itemsList/itemList'
import { Navigation } from './components/navigation/navigation'
import { PokeApi } from './components/pokeApi/poke-api'
import { Home } from './components/home/home'

export function App() {  

  return (  
   
    <>
    
    {/* <Navigation/>
    <ItemListContainer/>
      <PokeApi/> */}

      <Routes>
        <Route path='/' element={<Navigation/>}>
        <Route path='home' element={<Home/>}/>
        <Route path='poke-api/' element={<PokeApi/>}/>
        <Route path='itemList/' element={<ItemListContainer/>}/>
        </Route>
      </Routes>

    </>
  )
}


