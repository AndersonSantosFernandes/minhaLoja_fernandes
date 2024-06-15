import './poke-api.scss'
import React, { useState, useEffect } from 'react';


export function PokeApi() {
    const [pokemonData, setPokemonData] = useState([]);


    useEffect(() => {
        async function fetchPokemonData() {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=16');
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

                    </li>
                ))}
            </ul>
            <br />
            <hr />

            <div className="button-classe">
            <button onClick={anterior} disabled={pokeId === 1}>Retroceder</button>

                <button onClick={proximo} >Avançar</button>
                
                
            </div>


        </div>
    );
}

