import { useState } from "react"
import {ref} from "firebase/storage"

export function Cadastro(){


const [nomeProd, setNomeProd] = useState('')
const [precoProd, setPrecoProd] = useState('')
const [quantProd, setQuantProd] = useState('')
const [imgProd, setImgProd] = useState(null)

const handleSubmit = async (event) => {
    event.preventDefault()

    let imageUrl = ''

    if(imageUrl){
        const storageRef = ref()
        
    }
}

return(

   <form action="">


<div>
    <label htmlFor="">Nome do produto</label>
    <input type="text" />
</div>
<div>
    <label htmlFor="">Preço</label>
    <input type="number" />
</div>
<div>
    <label htmlFor="">Quantidade</label>
    <input type="number" />
</div>
<div>
    <label htmlFor="">Imagem produto</label>
    <input type="file" />
</div>
<div>
    <span>Mostrar imagem</span>
</div>

<button type="submit">Cadastrar produto</button>


   </form>
)

}