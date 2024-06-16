import './poke-api.scss'
import React, { useState, useEffect } from 'react';


export function PokeApi() {
    const [pokemonData, setPokemonData] = useState([]);


    useEffect(() => {
        async function fetchPokemonData() {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
                const data = await response.json();
                setPokemonData(data.results);
                console.log(data)
            } catch (error) {
                console.error('Erro ao buscar dados dos Pokémon:', error);
            }
        }

        fetchPokemonData();
    }, []);

    const [pokeId, setPokeId] = useState(1)
    function proximo() {
        setPokeId(pokeId + 1)
    }
    function anterior() {
        setPokeId(pokeId - 1)
    }
    function maisDez(){
        setPokeId(pokeId + 10)
    }
    function menosDez(){
        setPokeId(pokeId - 10)
    }
    return (
        <div className='list-container'>
            <h1>Lista de Pokémon</h1>
            <ul className='cada-pokemon'>
                {pokemonData.map((pokemon, index) => (
                    <li key={index}>
                        <img

                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + pokeId}.png`}

                            alt={pokemon.name}

                        
                        />
                        {/* <h3>ID: {index}</h3> */}

                    </li>
                ))}
            </ul>
            <br />
            <hr />

            <div className="button-classe">
            <button onClick={menosDez} disabled={pokeId <= 10 }>- 10</button>    
            <button onClick={anterior} disabled={pokeId === 1}>Retroceder</button>
            <h3>{pokeId}</h3>
                <button onClick={proximo}disabled={pokeId === 1010} >Avançar</button>
                <button onClick={maisDez} disabled={pokeId >=1001} >+ 10</button>
                
                
            </div>


        </div>
    );
}

