
import { useEffect, useState } from "react"
export function Contando(){
   
      //==========================================
    const [numero, setNumero] = useState(0)

    const zeroEsquerda = (val) => {
        if(val < 10){
            return "0"+val
        }else{
            return val
        }
    }
    //==============================================================
   
   
    return(


 
            <div className="container">
                <h2>Aula 11, contador com limite entre 0 e 20</h2>
                <div className="buttons_container">
                    <button onClick={() => setNumero((numero) => numero - 1)} disabled={numero === 0}>Menos</button>
                    <h1>{zeroEsquerda(numero)}</h1>
                    <button onClick={() => setNumero((numero) => numero + 1)} disabled={numero === 20}>Mais</button>
                </div>
            </div>

       




    )
}