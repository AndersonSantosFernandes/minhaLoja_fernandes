import './firebase.scss'
import { useEffect, useState } from 'react'
import { getFirestore, doc, getDoc, getDocs, collection, query, where, and } from "firebase/firestore"
export function FirebaseDb() {


    //criar um estado para aparecer o id
    const [produtos, setProdutos] = useState([])
    const [nomes, setNomes] = useState([])

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
    console.clear()
    const precoInicial = 160
    const precoFinal = 200

    useEffect(() => {

        const fetchData = async () => {

            try {

                const db = getFirestore()
                const itemsCollection = collection(db, "items")
                const q = query(itemsCollection
                    // where('price', ">", precoInicial, ),
                    // where('price', '<', precoFinal) 

                )

                const snapshot = await getDocs(q)
                let nomesEncontrados = []

                snapshot.forEach((docNome) => {
                    nomesEncontrados.push({ id: docNome.id, ...docNome.data() })
                });

                setProdutos(nomesEncontrados)
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
                    encontrados.push({ id: doc.id, ...doc.data() })
                });

                setNomes(encontrados)
            } catch (e) {
                console.error(e)
            }


        }
        fetchData()
    }, [])


    console.log('produtos ', produtos)
    console.log('nomes', nomes)

    return (
        <>

            <div className="item-container-list">
                {/* <div className='nomes-container-list'>
                    {

                        nomes.map((nome, index) => (
                            <div className='nomes-card' key={index}>
                                <span>{nome['nome']}</span>
                                <span>{nome['sobrenome']}</span>
                                <span>{nome['email']}</span>

                            </div>
                        ))

                    }
                </div> */}

                <div className='produtos-container-list'>
                    {

                        produtos.map((prod, index) => (
                            <div className='items-card' key={index}>
                                <div className="item-card">
                                    <span>{prod['title']}</span>
                                    <span>{prod['description']}</span>
                                    <span>{prod['price']}</span>

                                </div>
                                <div className="img-card">

                                    <img src={prod['imageUrl']} alt={prod['title']} />
                                </div>


                                {/* <h3>ID: {index}</h3> */}

                            </div>
                        ))

                    }
                </div>
            </div>

        </>
    )


}