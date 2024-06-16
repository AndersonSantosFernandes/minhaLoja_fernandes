import { useState } from 'react'
import { Aula11 } from '../aula11/aula11'
import './home.scss'


export function Home(){
  
    return(
        <>
        <div className="home-container">
            
        <h1>Contador</h1>
        <Aula11/>
        </div>
        </>
    )
}