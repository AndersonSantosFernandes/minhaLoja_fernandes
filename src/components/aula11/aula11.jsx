import { Loader } from '../loader/loader';
import { PosLoader } from '../loader/pos-loader';
import './aula11.scss'
import { useEffect, useState } from "react"


export function Aula11() {

  

const [loading, setLading] = useState(true)

useEffect(()=>{
    setTimeout(() => {
        setLading(false)
    }, 3000);
},[])
 
    return (

        <>


<Loader loading={loading}/>

{/* {!loading && <div>Conteúdo</div>} */}
{!loading && <PosLoader/>}

           

            {/* {loading ? <h2>Loading</h2> : <h2>Loaded</h2>} */}




        </>


    )
}